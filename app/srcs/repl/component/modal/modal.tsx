import React, { useRef } from 'react';
import * as style from './style';
import { useNavigate } from 'react-router-dom';

const Modal: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef<React.Ref>(null);

  return (
    <style.background onClick={e => {
      e.stopPropagation();
      if (e.target === ref.current) return;
      navigate(-1)
    }}>
      <style.div ref={ref}>

      </style.div>
    </style.background>
  );
};

export default Modal;
