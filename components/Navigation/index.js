import React from 'react';

import './index.scss';

import NextArrow from './next.svg';
import PreviowsArrow from './previous.svg';

const Navigation = ({ onPrevious, onNext }) =>
  <div className="Navigation">
    <img
      className="Navigation-previous"
      src={PreviowsArrow}
      onClick={onPrevious}
    />
    <img className="Navigation-next" src={NextArrow} onClick={onNext} />
  </div>;

export default Navigation;
