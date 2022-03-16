# CloneProject

This project is clone any site in web

1. https://www.heroinesinc.org/
2. https://replit.com/


# WebPage 제작을 위한 기본 컨디션에 대하여

## 기초적인 세팅에 대해서
### style
스타일에 고정적으로 사용되는 요소(fontsize, margin, padding, color)들을 공통적으로 사용할 수 있는 theme파일의 구성을 가장 기본으로 진행한다

**CSS** : css 변수를 `--var`를 활용하여 theme를 정의한다
**styled-components** : `ThemeProvider`를 제공
  
**유용할 정보**
1.  아래와 같이 정의해서 사용하면 유리함
```javascript
const createRem = (size: number) = (`${size/ 16}rem`); //16px을 기준으로 할 때
```
2. `reset.css`를 유용하게 활용할것

### DIR Stucture(ver 1.0)
**Rule**
1. 크게 `page`, `modal`, `component`, `public`, `hook`(in react)으로 나누어 정리한다
  - `page`: 화면에서 가장 크게 나타나는 요소, main section들과 공통적으로 표현되는 메뉴바, 헤더등을 포함한다.
  - `modal`: 화면에서 모달로써 띄워지는 요소
  - `component`: 페이지를 구성하는 요소들의 모음집
  - `public`: 위요소를 구성하지않는 정적파일(basic css, reset css, favicon, etc...)
  - `hook`(in react): react state를 관리하는 hook 모음

2. 하나의 요소 폴더(`component` or `page`등의 내부 폴더)는 반드시 해당 요소의 component를 이루는 js(ts)파일과 style파일을 가지고 있어야 한다.

3. `component`는 기본적으로 하나의 요소를 하나의 디렉토리에 담으나 공통적으로 사용되는 범용요소는 `component`내 `public`디렉토리에 포함시킨다

### configuration 정의
되도록이면 configuration은 하나의 디렉토리에 몰아서 작성한다. 되도록이면 `webpack`과 `tsconfig`,`babelrc`의 사용을 권장한다

webpack의 경우 아래와 같이 설정하기를 권장

**webpack.config.common**
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, '../srcs/index.tsx'),
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.join(__dirname, './.babelrc')
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader , 'css-loader']
            },
            {
                test: /\.(jpg|png)$/i,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    }
};

```

**webpack.dev**
```javascript
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        port: 9000,
        //proxy: '',
    },
    watchOptions: {
        poll: true
    }
});
```

**webpack.prod**
```javascript
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'production',
});
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'production',
});

```