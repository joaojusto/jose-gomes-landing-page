import React, { Component } from 'react';
import moment from 'moment';
import EventsContainer from '../../containers/Events';
import _ from 'lodash';

import './index.scss';

import Event from './Event';
import Calendar from './Calendar';

const sortEvents = events =>
  _.chain(events)
    .sortBy(
      event =>
        now.valueOf() - moment(event.dateTime, 'MM/DD/YYYY kk:mm A').valueOf()
    )
    .value();

const findActiveEvent = events => {
  const now = moment();

  return _.findIndex(sortEvents(events), event =>
    now.isSameOrBefore(moment(event.dateTime, 'MM/DD/YYYY kk:mm A'), 'day')
  );
};

class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = { activeEventIndex: findActiveEvent(props.events) };
  }

  onNext = () => {
    const { activeEventIndex } = this.state;

    if (activeEventIndex < this.props.events.length - 1)
      this.setState({ activeEventIndex: activeEventIndex + 1 });
  };

  onPrevious = () => {
    const { activeEventIndex } = this.state;

    if (activeEventIndex > 0)
      this.setState({ activeEventIndex: activeEventIndex - 1 });
  };

  renderEvent() {
    const { activeEventIndex } = this.state;

    const eventData = sortEvents(this.props.events)[activeEventIndex];

    return (
      <Event
        {...this.props}
        {...eventData}
        onPrevious={this.onPrevious}
        onNext={this.onNext}
      />
    );
  }

  onEventClick = selectedEvent => {
    const foundEvent = this.props.events.find(event =>
      moment(event.dateTime, 'MM/DD/YYYY kk:mm A').isSame(
        moment(selectedEvent.dateTime, 'MM/DD/YYYY kk:mm A')
      )
    );
    const eventIndex = this.props.events.indexOf(foundEvent);

    this.setState({ activeEventIndex: eventIndex });
  };

  render() {
    return (
      <section className="Agenda" id="Agenda">
        <h1 className="Agenda-title">{this.props.translate('agenda.title')}</h1>
        <div className="Agenda-content">
          <div className="Agenda-calendarContainer">
            <Calendar {...this.props} onEventClick={this.onEventClick} />
          </div>
          <div className="Agenda-eventContainer">{this.renderEvent()}</div>
        </div>
      </section>
    );
  }
}

export default EventsContainer(Agenda);
