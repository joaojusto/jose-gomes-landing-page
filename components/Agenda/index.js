import React, { Component } from 'react';

import './index.scss';

import Event from './Event';

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

  render() {
    return (
      <section className="Agenda">
        <h1 className="Agenda-title">Agenda</h1>
        <div className="Agenda-content">
          {this.renderEvent()}
        </div>
      </section>
    );
  }
}
