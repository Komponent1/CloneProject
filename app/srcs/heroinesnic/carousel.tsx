import React, { Children, useState, useRef, useEffect } from 'react';

const BtnCarousel: React.FC = ({ children }) => {
  const [ idx, setIdx ] = useState<number>(0);
  const refs = useRef<React.Ref[]>(
    Array.from({  length: children.length }).map(() => React.createRef())
  );
  const [ isChanged, setIsChanged ] = useState<boolean>(false);

  const click = (i: number) => {
    if (idx === i || isChanged) return;
    refs.current[idx].current.style.setProperty('--trans', 0);
    setIsChanged(true);
    setIdx(i);
  }
  useEffect(() => {
    refs.current[idx].current.style.setProperty('--trans', 1);
  }, [ idx ])

  return (
    <div className="carousel">
      <div className="wrapper">
        {children.map((elem, i) => React.cloneElement(elem, {
          onTransitionEnd: () => setIsChanged(false),
          ref: refs.current[i],
          className: 'item'
        }))}
      </div>
      <div className="btn">
        {children.map((_, i) => (
          <button className={i === idx ? 'select' : 'none'} onClick={() => click(i)} />
        ))}
      </div>
    </div>
  )
}

export default BtnCarousel;
