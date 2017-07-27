import React from 'react';

import './index.scss';

import HeroMobileImage from './hero-mobile.jpg';
import HeroDesktopImage from './hero-desktop.jpg';

const Hero = ({ translate }) => (
  <section className="Hero">
    <div className="Hero-backgroundWrapper">
      <img className="Hero-mobileBackground" src={HeroMobileImage} />
      <img className="Hero-desktopBackground" src={HeroDesktopImage} />
    </div>
    <div className="Hero-content">
      <h2 className="Hero-subtitle">{translate('hero.subtitle')}</h2>
      <h1 className="Hero-title">{translate('hero.title')}</h1>
    </div>
  </section>
);

export default Hero;
