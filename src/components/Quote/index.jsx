import React from 'react';

import './index.scss';

export default ({ translations }) => (
  <section className="Quote">"{translations?.quote || 'quote'}"</section>
);
