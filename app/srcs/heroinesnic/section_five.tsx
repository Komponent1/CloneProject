import React from 'react';
import BtnCarousel from './carousel';

const SectionFive: React.FC = () => (
  <section id="section5">
    <div className="left">
      <BtnCarousel>
        <div style={{ width: '100%', height: '100%', background: 'yellow'}} />
        <div style={{ width: '100%', height: '100%', background: 'red'}} />
        <div style={{ width: '100%', height: '100%', background: 'green'}} />
        <div style={{ width: '100%', height: '100%', background: 'grey'}} />
      </BtnCarousel>
    </div>
    <div className="right">

    </div>
  </section>
);

export default SectionFive;
