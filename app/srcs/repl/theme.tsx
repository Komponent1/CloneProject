const createRem = (size: number) => `${size / 16}rem`;

const fontSize = {
  small: createRem(14),
  base: createRem(16),
  lg: createRem(18),
  xl: createRem(20),
  xxl: createRem(22),
  title: createRem(50)
};
const color = {
  sky: 'rgb(107, 181, 255)',
  grey: 'rgb(175 177 179)',
  basic: '#E4E5E6',
}

export default {
  fontSize, color
};
