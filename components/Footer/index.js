import React from 'react';

import './index.scss';
import TwitterLogo from './twitter.svg';
import FacebookLogo from './facebook.svg';

const Footer = () =>
  <section className="Footer" id="Contactar">
    <div className="Footer-column">
      <h2 className="Footer-title">Contacto</h2>
    </div>
    <div className="Footer-largeColumn">
      <div className="Footer-content">
        <div>
          <p>José Eduardo Gomes</p>
          <p>gomes.jose83@gmail.com</p>
        </div>
        <div className="Footer-socialLinks">
          <a href="https://www.facebook.com/José-Eduardo-Gomes-198462783943299">
            <img src={FacebookLogo} className="Footer-socialLink" />
          </a>
          <a href="https://twitter.com/jose_gomes83">
            <img src={TwitterLogo} className="Footer-socialLink" />
          </a>
        </div>
      </div>
      <p className="Footer-copywrite">
        Copyright © 2017 José Eduardo Gomes. All Rights Reserved. Website by
        João Justo and João Andrade
      </p>
    </div>
    <div className="Footer-column" />
  </section>;

export default Footer;
