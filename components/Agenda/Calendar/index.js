import React from 'react';

import './index.scss';

import Navigation from '../../Navigation';

const Calendar = props =>
  <div className="Calendar">
    <div className="Calendar-navigatoin">
      <Navigation onNext={props.onNext} onPrevious={props.onPrevious} />
    </div>
    <div className="Calendar-content" />
  </div>;

export default Calendar;
