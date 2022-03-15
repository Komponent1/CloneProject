import { useState } from 'react';

const useDisplay = (initial: boolean) => {
  const [display, setDisplay]  = useState<boolean>(initial);

  const on = () => setDisplay(true);
  const off = () => setDisplay(false);
  const toggle = () => setDisplay((prev: boolean) => !prev);

  return { display, on, off, toggle };
};

export default useDisplay;
