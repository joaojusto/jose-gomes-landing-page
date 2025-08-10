import React from 'react';
import moment from 'moment';

moment.locale('pt');

import './index.scss';
import Navigation from '../../Navigation';

const Event = props => (
  <div className="Event">
    <div className="Event-backgroundWrapper">
      <img className="Event-background" src="/images/event-background.jpg" />
      <img className="Event-backgroundMobile" src="/images/event-background-mobile.jpg" />
      <div className="Event-navigation">
        <Navigation onNext={props.onNext} onPrevious={props.onPrevious} />
      </div>
      <div className="Event-content">
        <div className="Event-date">
          {moment(props.dateTime || props.parsedDateTime).format('DD MMMM YYYY - HH:mm')}
        </div>
        <div className="Event-location">{props.location}</div>
        <div className="Event-name">{props.title}</div>
        <div className="Event-description">
          {props.currentLanguage === 'en'
            ? props.descriptionEn
            : props.description}
        </div>
        {props.url ? (
          <a className="Event-link" href={props.url}>
            <img src="/images/link.svg" />
          </a>
        ) : null}
      </div>
    </div>
    <div className="Event-mobileContent">
      <div className="Event-descriptionMobile">
        {props.currentLanguage === 'en'
          ? props.descriptionEn
          : props.description}
      </div>
      <div className="Event-locationMobile">
        <img src="/images/location.svg" />
        {props.location}
      </div>
    </div>
  </div>
);

export default Event;
