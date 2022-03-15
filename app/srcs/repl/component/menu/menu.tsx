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
  styles?: Object
};
const menu: MenuProp[] = [
  {
    className: 'createbtn',
    src: '',
    url: '/repl/creates/c',
    text: 'Create',
    state: {},
    styles: { textAlign: 'center', background: '#6BB5FF', fontSize: '0.9em' }
  },
  {
    className: 'upgradebtn',
    src: '',
    url: '/repl/upgrade',
    text: 'Upgrade',
    styles: { textAlign: 'center', boxShadow: '0 0 0 1px inset #AFB1B3', fontSize: '0.9em' }
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

const IconBtn: React.FC = ({ className, src, url, text, state, styles }: MenuProp) => (
  <Link state={state} to={url}>
    <style.menu className={className} style={styles}>
      <img src={src} />
      {text}
    </style.menu>
  </Link>
);

const Menu: React.FC = ({ display }) => {
  const location = useLocation();
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
