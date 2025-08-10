import React from 'react';

import './index.scss';

const Navigation = ({ onPrevious, onNext }) =>
  <div className="Navigation">
    <img
      className="Navigation-previous"
      src="/images/previous.svg"
      onClick={onPrevious}
    />
    <img className="Navigation-next" src="/images/next.svg" onClick={onNext} />
  </div>;

export default Navigation;
