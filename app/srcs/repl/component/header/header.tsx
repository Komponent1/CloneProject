import React from 'react';
import * as style from './style';

const Header: React.FC = ({ children }) => (
  <style.div className='header'>
    {children}
  </style.div>
);

export default Header;
