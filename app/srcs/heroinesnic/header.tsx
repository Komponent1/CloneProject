import React, { useEffect, useRef } from 'react';
import { throttle } from './utils'; 
import Tab from './tab';
import Dropdown from './dropdown';

const useScrollAppear = (scrollTop: number, eventDelay: number, disapearPosition: string): React.Ref => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const scrollingEvent = () => {
      if (scrollY < scrollTop) ref.current.style.top = '0';
      else ref.current.style.top = disapearPosition;
    };
    window.addEventListener("scroll", throttle(scrollingEvent, eventDelay));

    return () => window.removeEventListener("scroll", throttle(scrollingEvent, eventDelay));
  }, []);

  return ref;
}

const Header: React.FC = () => {
  const ref = useScrollAppear(200, 1000, '-50px');

  return (
    <header ref={ref}>
      <Tab>
        <Dropdown title='Home' item={[]} />
        <Dropdown title='About' item={[]} />
        <Dropdown title='Event' item={['with.IN']} />
        <Dropdown title='Community' item={['Blog', 'Forum']} />
        <Dropdown title='Join' item={[]} />
        <Dropdown title='Contact' item={[]} />
        <Dropdown title='Membership' item={[]} />
      </Tab>
    </header>
  )
};

export default Header;
