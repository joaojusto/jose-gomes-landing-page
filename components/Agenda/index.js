import React, { Component } from 'react';

import './index.scss';

import Event from './Event';
import Calendar from './Calendar';

import events from '../../Data/Events.js';

export default class Agenda extends Component {
  constructor() {
    super();
    this.state = { activeEventIndex: 0 };
  }

  onNext = () => {
    const { activeEventIndex } = this.state;

    if (activeEventIndex < events.length - 1)
      this.setState({ activeEventIndex: activeEventIndex + 1 });
  };

  onPrevious = () => {
    const { activeEventIndex } = this.state;

    if (activeEventIndex > 0)
      this.setState({ activeEventIndex: activeEventIndex - 1 });
  };

  renderEvent() {
    const { activeEventIndex } = this.state;
    const eventData = events[activeEventIndex];

    return (
      <Event {...eventData} onPrevious={this.onPrevious} onNext={this.onNext} />
    );
  }

  onEventClick = selectedEvent => {
    const foundEvent = events.find(
      event => event.day === selectedEvent.day && event.month === event.month
    );
    const eventIndex = events.indexOf(foundEvent);

    this.setState({ activeEventIndex: eventIndex });
  };

  render() {
    return (
      <section className="Agenda">
        <h1 className="Agenda-title">Agenda</h1>
        <div className="Agenda-content">
          <div className="Agenda-calendarContainer">
            <Calendar events={events} onEventClick={this.onEventClick} />
          </div>
          <div className="Agenda-eventContainer">
            {this.renderEvent()}
          </div>
        </div>
      </section>
    );
  }
}
