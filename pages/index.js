import React from 'react';

import Hero from '../components/Hero';
import Agenda from '../components/Agenda';
import News from '../components/News';
import Biography from '../components/Biography';
import Galery from '../components/Galery';
import Footer from '../components/Footer';

const Index = () => (
  <div className="Index">
    <Hero />
    <Agenda />
    <News />
    <Biography />
    <Galery />
    <Footer />
  </div>
);

export default Index;
