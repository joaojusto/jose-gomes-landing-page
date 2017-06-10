import React from 'react';

import './index.scss';

import HeroMobileImage from './hero-mobile.jpg';
import HeroDesktopImage from './hero-desktop.jpg';

const Hero = () =>
  <section className="Hero">
    <div className="Hero-backgroundWrapper">
      <img className="Hero-mobileBackground" src={HeroMobileImage} />
      <img className="Hero-desktopBackground" src={HeroDesktopImage} />
    </div>
    <div className="Hero-content">
      <h2 className="Hero-subtitle">Maestro</h2>
      <h1 className="Hero-title">José Eduardo Gomes</h1>
    </div>
  </section>;

export default Hero;
