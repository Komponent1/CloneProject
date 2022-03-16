ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/autocomplete))

### How to Use

~~~javascript
import { Autocomplete } from 'komponent/react/component';

<AutoComplete
  placeholder={/* string of placholder */}
  fetcher={/* api function for li update */} />
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|fetcher|`() => Promise<{data: string[]}>`|`undefined`|yes|서버로부터 데이터를 받아올 fetch method|
|placeholder|`string`|`''`|no|input에 들어갈 placeholder 값|

### 기능
특정 단어를 입력시 해당 단어를 포함한 목록을 확인시켜주는 컴포넌트

### structure(for styling)
```html
<div class='kui_autocomplete'>
  <input class='kui_autocomplete_input' />
  <ul class='kui_autocomplete_ul'>
    <li class='kui_autocomplete_li' />
  </ul>
</div>

```
