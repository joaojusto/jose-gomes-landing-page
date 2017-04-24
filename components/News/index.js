import React from 'react';

import './index.scss';
import NewsLink from '../NewsLink';

const news = [
  {
    url: '',
    date: '04/09/2014 in P3',
    title: 'José Eduardo Gomes, um maestro com apenas 31 anos',
  },
  {
    url: '',
    date: '04/09/2014 in P3',
    title: 'José Eduardo Gomes, o jovem maestro',
  },
  {
    url: '',
    date: '04/09/2014 in P3',
    title: 'José Eduardo Gomes, um maestro com apenas 31 anos',
  },
];

const News = () => (
  <section className="News">
    <h2 className="News-title">noticias</h2>
    <div className="News-content">
      <div className="News-list">
        {news.map(data => (
          <div className="News-listItem">
            <NewsLink {...data} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default News;
