import React from 'react';

import './index.scss';
import HeroMobile from './hero.jpg';
import HeroDesktopImage from './hero-desktop.jpg';

const Hero = () => (
  <section className="Hero">
    <img src={HeroMobile} className="Hero-mobileImage"/>
    <img src={HeroDesktopImage} className="Hero-desktopImage"/>
    <div className="Hero-content">
      <div>
        <h1 className="Hero-title">José Eduardo Gomes</h1>
        <h2 className="Hero-subtitle">Maestro</h2>
      </div>
      <h3 className="Hero-uvp">“Música é partilha"</h3>
    </div>
  </section>
);

export default Hero;
