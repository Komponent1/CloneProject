import React, { useRef } from 'react';
import * as style from './style';
import { useLocation } from 'react-router-dom';
import { MenuBtn } from '../../component';
import { menu } from './config';

const Menu: React.FC = ({ display }) => {
  const location = useLocation();
  const ref = useRef<React.Ref>(null);

  return (
    <style.div className='menu'
      ref={ref}style={{ display: display ? 'block' : 'none' }}>
      {menu.map((e, i) => (
        <MenuBtn
          key={i} {...e}
          state={e.state ? { backgroundLocation: location } : null}/>
      ))}
    </style.div>
  )
};

export default Menu;
