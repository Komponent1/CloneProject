import React, { useState, useEffect } from 'react';

const Dropdown: React.FC = ({ title, item }) => {
  const [ hover, setHover ] = useState<boolean>(false);

  return (
    <div className="dropdown"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="dropdown_item"
        style={{ color: title === 'Home' ? 'black' : 'white'}}>
        {title}
      </div>
      <div className="dropdown_wrapper" style={{ display: hover ? 'block' : 'none' }}>
      {item.map((e, i) => (
        <div className="dropdown_item" key={`dropdown_${i}`}
          style={{ color: 'white'}}>
          {e}
        </div>
      ))}
      </div>
    </div>
  )
};

export default Dropdown;
