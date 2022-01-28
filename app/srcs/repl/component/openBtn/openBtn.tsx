import React from 'react';
import * as style from './style';

const OpenBtn: React.FC = ({ toggle }) => {
  return (
    <style.div className='openbtn' onClick={() => toggle()}>
      =
    </style.div>
  )
};

export default OpenBtn;
