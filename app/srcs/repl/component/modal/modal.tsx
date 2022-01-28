import React from 'react';
import * as style from './style';
import { useNavigate } from 'react-router-dom';

const Modal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <style.background onClick={() => navigate(-1)}>
      <style.div>

      </style.div>
    </style.background>
  );
};

export default Modal;
