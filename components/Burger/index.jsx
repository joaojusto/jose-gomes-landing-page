import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './index.scss';

const Burger = ({ isOpen, onClick }) => {
  const className = classNames({
    Burger: true,
    'is-open': isOpen,
  });

  return (
    <div className={className} onClick={onClick}>
      <div className="Burger-bar" />
      <div className="Burger-bar" />
      <div className="Burger-bar" />
    </div>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
