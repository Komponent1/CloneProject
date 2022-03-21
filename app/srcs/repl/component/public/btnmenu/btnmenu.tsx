import React, { useState, useEffect, useRef } from 'react';
import * as style from './style';

type Prop = {
  title?: string,
  config: {
    name: string,
    act: () => {}
  }[]
}
const BtnMenu: React.FC = ({ title = '=', config }: Prop) => {
  const [display, setDisplay] = useState<boolean>(false);
  const ref = useRef<React.Ref>(null);
  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.target === ref.current) return;
      
      setDisplay(false);
    })
  }, []);


  return (
    <style.div className='kui_btnmenu' ref={ref}>
      <style.btn className='kui_btnmenu_btn'
        show={display} 
        onClick={e => {
          e.stopPropagation();
          setDisplay(prev => !prev);
        }}>
        {title}
      </style.btn>
      <style.ul className="kui_btnmenu_ul"
        show={display} >
        {config.map((btn, i) => (
          <style.li className='kui_btnmenu_li'
            key={i}
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
