import React from 'react';

const lis = [
  "Home", "About", "Some", "Button"
];

const Tab: React.FC = ({ children }) => (
  <div id="tab">
    {children}
  </div>
);

export default Tab;
