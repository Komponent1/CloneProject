ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/loading))

### How to Use

~~~javascript
import { Loading } from 'komponent/react/component';

<Loading type='type of loading design' />
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|type|아래참고|`linearspin`|no|loading 디자인 타입 설정|

~~~typescript
type type = 'linearspin' | 'delayspin' | 'line';
~~~


### 기능
로딩중 상황을 표시하는 엘리먼트

### structure(for styling)
```html
<div class='kui_loading'>
  /* 다양하게 존재하므로 차후 업데이트 예정 */
</div>

```