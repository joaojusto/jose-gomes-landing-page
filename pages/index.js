import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Agenda from '../components/Agenda';
import News from '../components/News';
import Biography from '../components/Biography';
import Galery from '../components/Galery';
import Footer from '../components/Footer';

const meta = [
  { name: 'description', content: 'Maestro Jose Eduardo Gomes' },
  { name: 'keywords', content: 'Maestro, Músico' }
];

import { config } from '../config';

import '../components/reset.sass';
import '../components/layout.scss';

import Translate from '../containers/translations';

const Index = props => (
  <div className="Layout">
    <Helmet title={config.siteTitle} meta={meta} />
    <nav className="Layout-navbar">
      <Headroom disableInlineStyles>
        <Navbar {...props} />
      </Headroom>
    </nav>
    <div className="Layout-body">
      <Hero {...props} />
      <Agenda {...props} />
      <News {...props} />
      <Biography {...props} />
      <Galery {...props} />
      <Footer {...props} />
    </div>
  </div>
);

export default Translate(Index);
