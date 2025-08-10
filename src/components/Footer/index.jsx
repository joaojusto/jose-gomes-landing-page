import React from 'react';

import './index.scss';
import { translate } from '../../utils/translate';

const Footer = ({ translations }) => (
  <section className="Footer" id="Contactar">
    <div className="Footer-column">
      <h2 className="Footer-title">{translate(translations, 'contact.title')}</h2>
    </div>
    <div className="Footer-largeColumn">
      <div className="Footer-content">
        <div>
          <p>José Eduardo Gomes</p>
          <p>gomes.jose83@gmail.com</p>
        </div>
        <div>
          <a href="https://www.music-et-talent.com/">
            <img src="/images/musictalent.png" />
          </a>
          <p>Isabelle Chappellier</p>
          <p>isabelle@music-et-talent.com</p>
        </div>
        <div className="Footer-socialLinks">
          <a href="https://www.facebook.com/José-Eduardo-Gomes-198462783943299">
            <img src="/images/facebook.svg" className="Footer-socialLink" />
          </a>
          <a href="https://twitter.com/jose_gomes83">
            <img src="/images/twitter.svg" className="Footer-socialLink" />
          </a>
        </div>
      </div>
      <p className="Footer-copywrite">
        Copyright © 2017 José Eduardo Gomes. All Rights Reserved. Website by
        João Justo and João Andrade
      </p>
    </div>
    <div className="Footer-column" />
  </section>
);

export default Footer;
