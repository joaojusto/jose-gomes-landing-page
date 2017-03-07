import React from 'react';

import './index.scss';

const Agenda = () => (
  <section className="Agenda">
    <div className="Agenda-content">
      <h1 className="Agenda-title">Agenda</h1>
      <div className="Agenda-event">
        <div className="Agenda-eventDate">25<br/>Abril</div>
        <div className="Agenda-eventDescription">
          Concerto “25 de Abril Sempre!”, com a Orquestra Sinfónica da Casa da Música
        </div>
        <div className="Agenda-eventLocation">
          Casa da Música,<br/>
          Porto
        </div>
        <div>
          <span className="Agenda-eventAction">saber mais</span>
        </div>
      </div>

      <div className="Agenda-event">
        <div className="Agenda-eventDate">25<br/>Abril</div>
        <div className="Agenda-eventDescription">
          Concerto “25 de Abril Sempre!”, com a Orquestra Sinfónica da Casa da Música
        </div>
        <div className="Agenda-eventLocation">
          Casa da Música,<br/>
          Porto
        </div>
        <div>
          <span className="Agenda-eventAction">saber mais</span>
        </div>
      </div>
    </div>
  </section>
);

export default Agenda;
