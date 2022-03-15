ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/button))

### How to Use

~~~javascript
import { Button } from 'komponent/react/component';

<Button text='button title' click={/* Function of onclick event */} />
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|text|`string`|`''`|no|버튼에 들어갈 text값|
|click|`(e: React.MouseEvent) => void`|`e => {}`|no|버튼 클릭시(`mouseup`) 작동할 동작|

### 기능
마우스 클릭시 적용된 동작을 하는 컴포넌트

### structure(for styling)
```html
<div class='kui_button'>
  <div class='kui_button_wave' /> <--! This for animation -->
</div>

```