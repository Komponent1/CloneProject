import React from 'react';
import * as style from './style';
import { Link } from 'react-router-dom';
import { tMenu } from '../../types.d'

const MenuBtn: React.FC = ({ className, src, url, text, state, styles }: tMenu) => (
  <Link state={state} to={url}>
    <style.menu className={className} style={styles}>
      <img src={src} />
      {text}
    </style.menu>
  </Link>
);

export default MenuBtn;
