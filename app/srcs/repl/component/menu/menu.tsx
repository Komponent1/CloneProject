import React, { useState, useRef, useEffect } from 'react';
import * as style from './style';
import { Link, useLocation } from 'react-router-dom';

import im from '../../public/testimg.jpg'

type MenuProp = {
  className: string,
  src: string,
  url: string,
  text: string,
  state?: Object
};
const menu: MenuProp[] = [
  {
    className: 'createbtn',
    src: '',
    url: '/repl/create/c',
    text: 'Create',
    state: {}
  },
  {
    className: 'upgradebtn',
    src: '',
    url: '/repl/upgrade',
    text: 'Upgrade',
  },
  {
    className: 'normal',
    src: '',
    url: '/repl',
    text: 'Home',
  },
  {
    className: 'normal',
    src: '',
    url: '/repl/myrepl',
    text: 'My Repls',
  }
]


const IconBtn: React.FC = ({ className, src, url, text, state }: MenuProp) => (
  <style.menu className={className}>
    <Link state={state} to={url}>
      <img src={src} />
      {text}
    </Link>
  </style.menu>
);

const Menu: React.FC = ({ display }) => {
  const location = useLocation();
  const [active, setActive] = useState<boolean>();
  const ref = useRef<React.Ref>();

  

  return (
    <style.div ref={ref}style={{ display: display ? 'block' : 'none' }}>
      {menu.map((e, i) => (
        <IconBtn 
          key={i} {...e}
          state={e.state ? { backgroundLocation: location } : null}/>
      ))}
    </style.div>
  )
};

export default Menu;
