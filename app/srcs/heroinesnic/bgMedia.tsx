import React, { useRef, useState, useEffect } from 'react';

const Bg: React.FC = React.forwardRef((props, ref) => (
  <div className="bg" ref={ref}/>
));

const BgMedia: React.FC = () => {
  const ref = useRef<React.Ref>();
  const [ move, setMove ] = useState<boolean>(false);
  const observer = new IntersectionObserver(
    ([ entry ]) => {
      console.log('work');
      if (entry.isIntersecting) setMove(true);
      else setMove(false);
    }
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    const scrollevent = e => {
      console.log();
      ref.current.style.setProperty('--pos', 
        (window.innerHeight - ref.current.getBoundingClientRect().top - 50) / 8 + 'px'
      )
    }

    window.addEventListener('scroll', scrollevent)

    return () => window.removeEventListener('scroll', scrollevent);
  }, [ move ])

  return (
    <div className="bg_media">
      <Bg ref={ref} />
    </div>
  )
};

export default BgMedia;