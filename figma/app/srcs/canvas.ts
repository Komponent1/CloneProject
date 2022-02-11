import { stateCanvas } from "./state";

export const initCanvas = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  canvas.style.width = stateCanvas.size[0] + 'px';
  canvas.style.height = stateCanvas.size[1] + 'px';
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, stateCanvas.size[0], stateCanvas.size[1]);
};
