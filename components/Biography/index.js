import React from 'react';

import './index.scss';

import Background from './background.jpg';
import BackgroundMobile from './background-mobile.jpg';

const Biography = ({ translate, currentLanguage }) => (
  <section className="Biography" id="Biografia">
    <h2 className="Biography-title">{translate('biography.title')}</h2>
    <div className="Biography-backgroundColumn">
      <img className="Biography-background" src={Background} />
      <img className="Biography-backgroundMobile" src={BackgroundMobile} />
    </div>
    <div className="Biography-contentColumn">
      <div className="Biography-excerpt">
        <p>{translate('biography.excerpt')}</p>

        <div className="Biography-actions">
          <a
            href={`/bio_${currentLanguage}.pdf`}
            target="_blank"
            className="Biography-button"
          >
            {translate('biography.cta')}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Biography;
