import React, { Component } from "react";
import moment from "moment";
import EventsContainer from "../../containers/Events";
import _ from "lodash";

import "./index.scss";

import Event from "./Event";
import Calendar from "./Calendar";

const sortEvents = (events) =>
  _.chain(events).sortBy("dateTime").value().reverse();

const findActiveEvent = (events) => {
  const now = moment();

  return _.find(sortEvents(events), (event) =>
    now.isSameOrAfter(moment(event.dateTime), "day")
  );
};

class Agenda extends Component {
  constructor(props) {
    super(props);

    let events = sortEvents(props.events);

    this.state = { events, activeEvent: findActiveEvent(events) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ events: sortEvents(nextProps.events) });
  }

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

    return (
      <Event
        {...this.props}
        {...activeEvent}
        onNext={this.onNext}
        onPrevious={this.onPrevious}
      />
    );
  }

  render() {
    return (
      <section className="Agenda" id="Agenda">
        <h1 className="Agenda-title">{this.props.translate("agenda.title")}</h1>
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
