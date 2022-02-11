type Obj = {
  type: 'rectangle'|'line'|'ellipsis'|'polygon',
  pos: number[],
  attr: Object
  /* attr은 공통설정 + 타입에 따라 다르게 설정 */
};