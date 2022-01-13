import React from 'react';
import './style.css';

import Logo from './logo';
import Header from './header';
import SideBtn from './sidebtn';
import SectionOne from './section_one';
import SectionTwo from './section_two';
import SectionThree from './section_three';
import SectionFour from './section_four';
import SectionFive from './section_five';
import SectionSix from './section_six';
import Footer from './footer';

const Main: React.FC = () => (
  <div className='heroinesic'>
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
    
    <Logo />
    <SideBtn />
    <Header />
    
    <Footer></Footer>
  </div>
)

export default Main;
