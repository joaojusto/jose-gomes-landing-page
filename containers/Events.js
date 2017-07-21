import React, { Component } from 'react';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const events = requireAll(
  require.context('../Data/events', false, /^\.\/.*\.md$/)
);

const EventsContainer = WrappedComponent =>
  class extends Component {
    render() {
      return <WrappedComponent events={events} />;
    }
  };

export default EventsContainer;
