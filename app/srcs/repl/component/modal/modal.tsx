import React from 'react';
import * as style from './style';
import { useNavigate } from 'react-router-dom';

const Modal: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const ignore = e => e.stopPropagation();

  return (
    <style.background onClick={() => navigate(-1)}>
      <style.div onClick={ignore}>
        {children}
      </style.div>
    </style.background>
  );
};

export default Modal;
