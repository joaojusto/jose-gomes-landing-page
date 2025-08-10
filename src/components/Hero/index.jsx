import React from 'react';

import './index.scss';
import { translate } from '../../utils/translate';

const Hero = ({ translations }) => (
  <section className="Hero">
    <div className="Hero-backgroundWrapper">
      <img className="Hero-mobileBackground" src="/images/hero-mobile.jpg" />
      <img className="Hero-desktopBackground" src="/images/hero-desktop.jpg" />
    </div>
    <div className="Hero-content">
      <h2 className="Hero-subtitle">{translate(translations, 'hero.subtitle')}</h2>
      <h1 className="Hero-title">{translate(translations, 'hero.title')}</h1>
    </div>
  </section>
);

export default Hero;
