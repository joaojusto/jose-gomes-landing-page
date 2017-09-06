import React from 'react';
import moment from 'moment';

moment.locale('pt');

import './index.scss';

import Background from './background.jpg';
import BackgroundMobile from './background-mobile.jpg';
import LocationIcon from './location.svg';
import Navigation from '../../Navigation';
import LinkIcon from './link.svg';

const Event = props => (
  <div className="Event">
    <div className="Event-backgroundWrapper">
      <img className="Event-background" src={Background} />
      <img className="Event-backgroundMobile" src={BackgroundMobile} />
      <div className="Event-navigation">
        <Navigation onNext={props.onNext} onPrevious={props.onPrevious} />
      </div>
      <div className="Event-content">
        <div className="Event-date">
          {moment(props.dateTime, 'MM-DD-YYYY h:mm a').format(
            'DD MMMM YYYY - HH:mm'
          )}
        </div>
        <div className="Event-location">{props.location}</div>
        <div className="Event-name">{props.title}</div>
        <div className="Event-description">
          {props.currentLanguage === 'en' ? (
            props.descriptionEn
          ) : (
            props.description
          )}
        </div>
        {props.url ? (
          <a className="Event-link" href={props.url}>
            <img src={LinkIcon} />
          </a>
        ) : null}
      </div>
    </div>
    <div className="Event-mobileContent">
      <div className="Event-descriptionMobile">
        {props.currentLanguage === 'en' ? (
          props.descriptionEn
        ) : (
          props.description
        )}
      </div>
      <div className="Event-locationMobile">
        <img src={LocationIcon} />
        {props.location}
      </div>
    </div>
  </div>
);

export default Event;
