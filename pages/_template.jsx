import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import Helmet from 'react-helmet';

import { config } from '../config';
import '../components/reset.sass';
import '../components/layout.scss';

import Navbar from '../components/Navbar';

const meta = [
  { name: 'description', content: 'Maestro Jose Eduardo Gomes' },
  { name: 'keywords', content: 'Maestro, Músico' }
];

const Template = ({ children }) => (
  <div className="Layout">
    <Helmet title={config.siteTitle} meta={meta} />
    <nav className="Layout-navbar">
      <Headroom disableInlineStyles>
        <Navbar />
      </Headroom>
    </nav>

    <div className="Layout-content">
      {children}
    </div>
  </div>
);

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
