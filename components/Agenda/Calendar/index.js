import React, { Component } from 'react';

import './index.scss';

import Navigation from '../../Navigation';

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const month = (() => {
  let m = [];
  for (let i = 1; i <= 31; i++) {
    m.push(i);
  }
  for (let i = 1; i <= 11; i++) {
    m.push(i);
  }
  return m;
})();

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMonth: 'April' };
  }

  onNext = () => {
    console.log('next');
  };

  onPrevious = () => {
    console.log('previous');
  };

  onEventClick = event => () => this.props.onEventClick(event);

  renderWeekDays() {
    return weekDays.map(weekDay =>
      <div key={weekDay} className="Calendar-column">
        <span className="Calendar-weekDay">{weekDay}</span>
      </div>
    );
  }

  renderMonth() {
    let i = 0;
    let weeks = [];

    while (i <= month.length + 7) {
      weeks.push(month.slice(i, i + 7));
      i += 7;
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
    const eventForDay = this.props.events.find(event => event.day === day);

    if (eventForDay)
      return (
        <span
          className="Calendar-dayWithEvent"
          onClick={this.onEventClick(eventForDay)}
        >
          {day}
        </span>
      );

    return <span className="Calendar-day">{day}</span>;
  }

  render() {
    const { currentMonth } = this.state;

    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <div className="Calendar-navigation">
            <Navigation onNext={this.onNext} onPrevious={this.onPrevious} />
          </div>
          <div className="Calendar-currentMonth">Abril</div>
          <div className="Calendar-currentYear">2017</div>
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
