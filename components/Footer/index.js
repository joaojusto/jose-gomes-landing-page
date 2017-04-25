import React from 'react';

import './index.scss';
import TwitterLogo from './twitter.svg';
import FacebookLogo from './facebook.svg';

const Footer = () => (
  <div className="Footer">
    <div className="Footer-column">
      <h2 className="Footer-title">Contacto</h2>
    </div>
    <div className="Footer-largeColumn">
      <p>José Eduardo Gomes</p>
      <p>gomes.jose83@gmail.com</p>
      <div className="Footer-socialLinks">
        <img src={FacebookLogo} className="Footer-socialLink" />
        <img src={TwitterLogo} className="Footer-socialLink" />
      </div>
      <p className="Footer-copywrite">
        Copyright © 2017 José Eduardo Gomes. All Rights Reserved. Website by João Justo and João Andrade
      </p>
    </div>
    <div className="Footer-column" />
  </div>
);

export default Footer;
