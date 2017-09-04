import React, { PropTypes } from 'react';

const Template = ({ children }) => <div>{children}</div>;

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
