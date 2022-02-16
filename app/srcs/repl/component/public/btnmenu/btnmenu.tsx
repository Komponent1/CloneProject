import React, { useState, useEffect, useRef } from 'react';
import * as style from './style';

const BtnMenu: React.FC = ({ menus }) => {
  const [display, setDisplay] = useState<boolean>(false);
  const ref = useRef<React.Ref>(null);
  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.target === ref.current) return;
      
      setDisplay(false);
    })
  }, []);


  return (
    <style.div className='btnmenu'
      ref={ref}
      onClick={e => {
      e.stopPropagation();
      setDisplay(prev => !prev);
    }}>
      <style.btn show={display} className='btnmenu_btn'>=</style.btn>
      <style.ul show={display} className="btnmenu_ul">
        {menus.map((btn, i) => (
          <style.li key={i}
            onClick={e => {
              e.stopPropagation();
              btn.act();
              setDisplay(false);}}>
            {btn.name}
          </style.li>

        ))}
      </style.ul>
    </style.div>
  );
};

export default BtnMenu;
