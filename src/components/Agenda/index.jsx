import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";

import "./index.scss";

import Event from "./Event";
import Calendar from "./Calendar";
import { translate } from "../../utils/translate";

const sortEvents = (events) =>
  _.chain(events).sortBy(event => {
    const dateTime = event.data ? event.data.dateTime : event.dateTime;
    return new Date(dateTime).getTime();
  }).value().reverse();

const findActiveEvent = (events) => {
  const now = moment();

  return _.find(sortEvents(events), (event) => {
    const dateTime = event.data ? event.data.dateTime : event.dateTime;
    return now.isSameOrAfter(moment(dateTime), "day");
  });
};

class Agenda extends Component {
  constructor(props) {
    super(props);

    let events = sortEvents(props.events);

    this.state = { 
      events, 
      activeEvent: findActiveEvent(events),
      translations: props.translations || {}
    };
  }

  componentDidMount() {
    // Listen for language change events
    window.addEventListener('languageChange', this.handleLanguageChange);
  }

  componentWillUnmount() {
    // Clean up event listener
    window.removeEventListener('languageChange', this.handleLanguageChange);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ events: sortEvents(nextProps.events) });
  }

  handleLanguageChange = (event) => {
    this.setState({
      translations: event.detail.translations
    });
  };

  get activeEventIndex() {
    return _.indexOf(this.state.events, this.state.activeEvent);
  }

  onNext = () => {
    if (this.activeEventIndex < this.state.events.length - 1)
      this.setState({
        activeEvent: this.state.events[this.activeEventIndex + 1],
      });
  };

  onPrevious = () => {
    if (this.activeEventIndex > 0)
      this.setState({
        activeEvent: this.state.events[this.activeEventIndex - 1],
      });
  };

  onEventClick = (selectedEvent) =>
    this.setState({ activeEvent: selectedEvent });

  renderEvent() {
    const { activeEvent } = this.state;

    if (!activeEvent) return null;

    // Handle both content collection format and flat format
    const eventData = activeEvent.data ? activeEvent.data : activeEvent;

    return (
      <Event
        {...this.props}
        {...eventData}
        onNext={this.onNext}
        onPrevious={this.onPrevious}
      />
    );
  }

  render() {
    return (
      <section className="Agenda" id="Agenda">
        <h1 className="Agenda-title">{translate(this.state.translations, "agenda.title")}</h1>
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

export default Agenda;
