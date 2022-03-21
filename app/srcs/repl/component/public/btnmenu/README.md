ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/btnmenu))

### How to Use

~~~javascript
import { Btnmenu } from 'komponent/react/component';

<BtnMenu title='button title' config={/* list of menu*/} />
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|title|`string \| HTMLElement`|`"="`|no|버튼에 들어갈 텍스트 / 엘리먼트|
|config|`{ name: string, act: Function }[]`|`undefined`|yes|메뉴 텍스트 및 메뉴 동작(아래 참고)|

```typescript
type config = {
  name: 'menu text',
  act: /* action function of menu */
}[]
```

### 기능
버튼을 누르면 해당하는 메뉴가 나오는 엘리먼트

### structure(for styling)
```html
<div class='kui_btnmenu'>
  <div class='kui_btnmenu_btn' />
  <div class='kui_btnmenu_ul'>
    <div class='kui_btnmenu_li' />
    <div class='kui_btnmenu_li' />
    ...
  </div>
</div>

```
