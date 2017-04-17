import React from 'react';

import './index.scss';

const Agenda = () => (
  <section className="Agenda">
    <h1 className="Agenda-title">Agenda</h1>
    <div className="Agenda-content">
      <div className="Agenda-event">
        <div className="Agenda-eventDate">25 Abril</div>
        <div className="Agenda-eventTitle">
          Concerto Comemoração 25 Abril
        </div>
        <div className="Agenda-eventDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt ut labore et dolore magna Ut enim ad me.
        </div>
        <div className="Agenda-eventLocation">
          Ponte 25 de abril, Lisboa
        </div>
      </div>
    </div>
    <div className="Agenda-action">Ver por mês</div>
  </section>
);

export default Agenda;
