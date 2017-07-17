import React from 'react';

import './index.scss';

import Background from './background.jpg';
import BackgroundMobile from './background-mobile.jpg';

const Biography = () =>
  <section className="Biography" id="Biografia">
    <h2 className="Biography-title">Biografia</h2>
    <div className="Biography-backgroundColumn">
      <img className="Biography-background" src={Background} />
      <img className="Biography-backgroundMobile" src={BackgroundMobile} />
    </div>
    <div className="Biography-contentColumn">
      <div className="Biography-excerpt">
        <p>
          José Eduardo é maestro titular da Orquestra Clássica do Centro,
          Orquestra Clássica da FEUP e do Coro do Círculo Portuense de Ópera.
          Recentemente foi laureado com o 2º Prémio no Concurso Prémio Jovens
          Músicos, na
          categoria de Direção de Orquestra, tendo obtido igualmente o Prémio da
          Orquestra.
        </p>

        <div className="Biography-actions">
          <a href="/bio_pt.pdf" target="_blank" className="Biography-button">
            Download Biografia
          </a>
        </div>
      </div>
    </div>
  </section>;

export default Biography;
