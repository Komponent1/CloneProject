type canvas = {
  pos: number[],
  size: number[],
  act: string,
  actOpt: Object // action에 따라 값 다름
}
const initial: canvas = {
  pos: [0, 0],
  size: [1000, 1000],
  act: 'select',
  actOpt: {}
};

export default initial;
