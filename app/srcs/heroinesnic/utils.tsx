export const throttle = (func: any, delay: number): (this: Window, ev: Event) => any =>{
  let thorttled = false;
  return (...arg: any[]): void => {
    if (!thorttled) {
      thorttled = true;
      setTimeout(() => {
        func(...arg);
        thorttled = false;
      }, delay)
    }
  } 
}
