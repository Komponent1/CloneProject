import React, { useRef, useState } from 'react';
import * as style from './style';

type Prop = {
  text?: string,
  click?: (e: React.MouseEvent) => void
};
const Button: React.FC = ({ text = '', click = (e: React.MouseEvent) => {} }: Prop) => {
  const [wave, setWave] = useState({
    opacity: 0, duration: 0, top: 0, left: 0, sacle: 0
  });

  const waveRef = useRef<React.Ref>(null);
  const btnRef = useRef<React.Ref>(null);

  return (
    <style.button className='kui_button'
      ref={btnRef}
      onMouseDown={(e: React.MouseEvent) => {
        waveRef.current.ontransitionend = () => {};
        setWave({
          opacity: 1, duration: 0.3,
          top: e.clientY - btnRef.current.offsetTop - 100,
          left: e.clientX - btnRef.current.offsetLeft - 100,
          scale: 1
        })
      }}
      onMouseUp={(e: React.MouseEvent) => {
        setWave({...wave, opacity: 0 });
        waveRef.current.ontransitionend = () => {
          setWave({ ...wave, duration: 0, scale: 0 });
        }
        click(e);
      }}>
      {text}
      <style.wave className='kui_button_wave'
        ref={waveRef} {...wave}
      />
    </style.button>
  )
};

export default Button;
