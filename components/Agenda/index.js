import React, { Component } from 'react';
import moment from 'moment';
import EventsContainer from '../../containers/Events';

import './index.scss';

import Event from './Event';
import Calendar from './Calendar';

class Agenda extends Component {
  constructor() {
    super();
    this.state = { activeEventIndex: 0 };
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
    const eventData = this.props.events[activeEventIndex];

    return (
      <Event {...eventData} onPrevious={this.onPrevious} onNext={this.onNext} />
    );
  }

  onEventClick = selectedEvent => {
    const foundEvent = this.props.events.find(event =>
      moment(event.dateTime).isSame(selectedEvent.dateTime)
    );
    const eventIndex = this.props.events.indexOf(foundEvent);

    this.setState({ activeEventIndex: eventIndex });
  };

  render() {
    return (
      <section className="Agenda" id="Agenda">
        <h1 className="Agenda-title">Agenda</h1>
        <div className="Agenda-content">
          <div className="Agenda-calendarContainer">
            <Calendar
              events={this.props.events}
              onEventClick={this.onEventClick}
            />
          </div>
          <div className="Agenda-eventContainer">
            {this.renderEvent()}
          </div>
        </div>
      </section>
    );
  }
}

export default EventsContainer(Agenda);
