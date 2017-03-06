import React from 'react';
import Helmet from 'react-helmet';

import { config } from '../config';
import Hero from '../components/Hero';

const meta = [
  { name: 'description', content: 'Maestro Jose Eduardo Gomes' },
  { name: 'keywords', content: 'Maestro, Músico' }
];

const Index = () => (
  <div className="Index">
    <Helmet title={config.siteTitle} meta={meta} />
    <Hero />
  </div>
);

export default Index;
