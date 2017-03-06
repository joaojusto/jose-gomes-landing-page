import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';

const Template = ({ children }) => (
  <div>
    <nav className="Layout-navbar">
      <Headroom />
    </nav>

    <div className="Layout-content">
      {children}
    </div>
  </div>
);

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
