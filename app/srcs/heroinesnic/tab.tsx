import React from 'react';

const lis = [
  "Home", "About", "Some", "Button"
];

const Tab: React.FC = () => (
  <div id="tab">
    {lis.map((li, i) => (
      <div className="li" key={`tab_${i}`}>
        {li}
      </div>
    ))}
  </div>
);

export default Tab;
