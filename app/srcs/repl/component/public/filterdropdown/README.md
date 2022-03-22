ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/dropdown))

### How to Use

~~~javascript
import { Filterdropdown } from 'komponent/react/component';

<FilterDropdown 
  placeholder='place holder of dropdown'
  init='init input value setting'
  options={/* list of option string */}
  setOtion={/* set parent state with option */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|placeholder|`string`|`undefined`|no|input placeholder|
|init|`string`|`undefined`|no|최초 input value 설정값|
|list|`string[]`|`undefined`|yes|드롭다운의 값 리스트|
|setOption|`(option: string, idx?:number) => void\|any`|`undefined`|yes|드롭다운이 변경될때 상위 스테이트를 변경하는 함수|


### 기능
여러 요소들중 선택하는 select 컴포넌트

### structure(for styling)
```html
<div class='kui_filterdropdown'>
  <input class='kui_filterdropdown_input'/>
  <div class='kui_filterdropdown_ul'>
    <div class='kui_filterdropdown_li'/>
    <div class='kui_filterdropdown_li'/>
    ...
  </div>
</div>

```