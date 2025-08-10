import React from 'react';

import './index.scss';
import { translate } from '../../utils/translate';

const Biography = ({ translations, currentLanguage }) => (
  <section className="Biography" id="Biografia">
    <h2 className="Biography-title">{translate(translations, 'biography.title')}</h2>
    <div className="Biography-backgroundColumn">
      <img className="Biography-background" src="/images/background.jpg" />
      <img className="Biography-backgroundMobile" src="/images/background-mobile.jpg" />
    </div>
    <div className="Biography-contentColumn">
      <div className="Biography-excerpt">
        <p>{translate(translations, 'biography.excerpt')}</p>

        <div className="Biography-actions">
          <a
            href={`/bio_${currentLanguage}.pdf`}
            target="_blank"
            className="Biography-button"
          >
            {translate(translations, 'biography.cta')}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Biography;
