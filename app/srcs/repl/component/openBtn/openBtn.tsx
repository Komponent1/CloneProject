import React, { useState, useRef, useEffect } from 'react';
import * as style from './style';

const OpenBtn: React.FC = ({ toggle }) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<React.Ref>()

  useEffect(() => {
    const click = e => {
      e.stopPropagation();
      if (e.target === ref.current) return;
      setActive(false);
    }
    window.addEventListener('click', click);

    return () => window.removeEventListener('click', click);
  }, [])

  return (
    <style.div className='openbtn'
      onClick={e => {
        e.stopPropagation();
        setActive(true);
        toggle()
      }}>
      <style.h1 active={active}>
        =
      </style.h1>
    </style.div>
  )
};

export default OpenBtn;
