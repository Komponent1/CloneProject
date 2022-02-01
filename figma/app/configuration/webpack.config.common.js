const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../srcs/index.ts'),
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
