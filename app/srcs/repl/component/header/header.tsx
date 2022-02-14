import React from 'react';
import * as style from './style';

const Header: React.FC = ({ children }) => (
  
  <style.div>
    <div style={{ width: '300px'}}/>
    {children}
  </style.div>
);

export default Header;
