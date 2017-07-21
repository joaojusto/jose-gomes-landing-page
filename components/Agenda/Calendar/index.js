import React, { Component } from 'react';
import Moment from 'moment';
import classNames from 'classnames';

const moment = Moment;
moment.locale('pt');

import './index.scss';

import Navigation from '../../Navigation';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMonth: moment() };
  }

  onNext = () => {
    const nextMonth = this.state.currentMonth.clone().add(1, 'month');
    this.setState({ currentMonth: nextMonth });
  };

  onPrevious = () => {
    const previousMonth = this.state.currentMonth.clone().subtract(1, 'month');
    this.setState({ currentMonth: previousMonth });
  };

  onEventClick = event => () => this.props.onEventClick(event);

  renderWeekDays() {
    return moment.weekdaysShort().map(weekDay =>
      <div key={weekDay} className="Calendar-column">
        <span className="Calendar-weekDay">
          {weekDay}
        </span>
      </div>
    );
  }

  renderMonth() {
    const endOfMonth = this.state.currentMonth.clone().endOf('month');
    const startOfMonth = this.state.currentMonth.clone().startOf('month');

    const numberOfWeeks = endOfMonth.week() - startOfMonth.week();

    let weeks = [];
    let currentDay = startOfMonth.clone().startOf('week');

    while (weeks.length <= numberOfWeeks) {
      let week = [];
      let currentWeek = currentDay.week();

      while (currentWeek === currentDay.week()) {
        week.push(currentDay.clone());
        currentDay.add(1, 'day');
      }

      weeks.push(week);
    }

    return weeks.map((week, index) =>
      <div key={index} className="Calendar-row">
        {this.renderWeek(week)}
      </div>
    );
  }

  renderWeek(week) {
    return week.map(day =>
      <div key={day} className="Calendar-column">
        {this.renderDay(day)}
      </div>
    );
  }

  renderDay(day) {
    const { currentMonth } = this.state;

    const eventForDay = this.props.events.find(event => {
      const eventDate = moment(event.dateTime).endOf('day');
      return day.endOf('day').isSame(event.dateTime, 'day');
    });

    if (eventForDay)
      return (
        <span
          className="Calendar-dayWithEvent"
          onClick={this.onEventClick(eventForDay)}
        >
          {day.date()}
        </span>
      );

    const className = classNames({
      'Calendar-day': true,
      'is-disabled': day.month() !== currentMonth.month()
    });

    return (
      <span className={className}>
        {day.date()}
      </span>
    );
  }

  render() {
    const { currentMonth } = this.state;

    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <div className="Calendar-navigation">
            <Navigation onNext={this.onNext} onPrevious={this.onPrevious} />
          </div>
          <div className="Calendar-currentMonth">
            {currentMonth.format('MMMM')}
          </div>
          <div className="Calendar-currentYear">
            {currentMonth.year()}
          </div>
        </div>
        <div className="Calendar-content">
          <div className="Calendar-row">
            {this.renderWeekDays()}
          </div>
          {this.renderMonth()}
        </div>
      </div>
    );
  }
}
