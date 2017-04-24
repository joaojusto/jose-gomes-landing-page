import React, { PropTypes } from 'react';

import './index.scss';
const NewsLink = ({ title, date, url }) => (
  <a href={url} className="NewsLink">
    <p className="NewsLink-title">{title}</p>
    <span className="NewsLink-date">{date}</span>
  </a>
);

NewsLink.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsLink;
