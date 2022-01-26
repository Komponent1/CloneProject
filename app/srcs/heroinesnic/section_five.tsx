import React from 'react';
import BtnCarousel from './carousel';
import BgMedia from './bgMedia';

const SectionFive: React.FC = () => (
  <section id="section5">
    <div className="left">
      <BtnCarousel>
        <div style={{ width: '100%', height: '100%', background: 'yellow'}}>
          This is One of Text in Carosel, One of This
        </div>
        <div style={{ width: '100%', height: '100%', background: 'red'}}>
          This is Two Blabla, more over Text blabla, Bread is delicious BlaBla
        </div>
        <div style={{ width: '100%', height: '100%', background: 'green'}}>
          ...12312312312313231231231231231
          23123123123123123123123
        </div>
        <div style={{ width: '100%', height: '100%', background: 'grey'}}>
          1231231231231323123123123123123123123123123123123123
        </div>
      </BtnCarousel>
    </div>
    <div className="right">
      <BgMedia />
    </div>
  </section>
);

export default SectionFive;
