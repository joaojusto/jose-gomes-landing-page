import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/pt';
import classNames from 'classnames';

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

  renderWeekDays(firstWeek) {
    return firstWeek.map(weekDay => (
      <span key={weekDay.format('ddd')} className="Calendar-weekDay">
        {weekDay.format('ddd')}
      </span>
    ));
  }

  renderMonth() {
    const endOfMonth = this.state.currentMonth.clone().endOf('month');
    const startOfMonth = this.state.currentMonth.clone().startOf('month');

    let numberOfWeeks = Math.round(endOfMonth.diff(startOfMonth, 'day') / 7);

    if (startOfMonth.isoWeekday() >= 6) numberOfWeeks += 1;

    let weeks = [];
    let currentDay = startOfMonth.clone().startOf('isoWeek');

    while (weeks.length <= numberOfWeeks) {
      let week = [];
      let currentWeek = currentDay.isoWeek();

      while (currentWeek === currentDay.isoWeek()) {
        week.push(currentDay.clone());
        currentDay.add(1, 'day');
      }

      weeks.push(week);
    }

    if (!weeks[0]) return null;

    return (
      <div className="Calendar-content">
        <div className="Calendar-row">{this.renderWeekDays(weeks[0])}</div>
        {weeks.map((week, index) => (
          <div key={index} className="Calendar-row">
            {this.renderWeek(week)}
          </div>
        ))}
      </div>
    );
  }

  renderWeek(week) {
    return week.map(this.renderDay);
  }

  renderDay = day => {
    const { currentMonth } = this.state;

    const eventForDay = this.props.events.find(event => {
      const eventDate = moment(event.dateTime);

      return day.isSame(eventDate, 'day');
    });

    if (eventForDay)
      return (
        <span
          key={day.date()}
          className="Calendar-dayWithEvent"
          onClick={this.onEventClick(eventForDay)}
        >
          {day.date()}
        </span>
      );

    const className = classNames({
      'Calendar-day': true,
      'is-disabled': day.month() !== currentMonth.month(),
    });

    return (
      <span key={day.date()} className={className}>
        {day.date()}
      </span>
    );
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.currentLanguage !== nextProps.currentLanguage ||
      !_.isEqual(this.state, nextState)
    );
  }

  render() {
    const { currentMonth } = this.state;
    moment.locale(this.props.currentLanguage);

    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <div className="Calendar-navigation">
            <Navigation onNext={this.onNext} onPrevious={this.onPrevious} />
          </div>
          <div className="Calendar-currentMonth">
            {currentMonth.locale(this.props.currentLanguage).format('MMMM')}
          </div>
          <div className="Calendar-currentYear">{currentMonth.year()}</div>
        </div>
        {this.renderMonth()}
      </div>
    );
  }
}
