import React, { Component } from 'react';
import _ from 'lodash';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const events = _.sortBy(
  requireAll(require.context('../Data/events', false, /^\.\/.*\.md$/)),
  'dateTime'
);

const EventsContainer = WrappedComponent =>
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} events={events} />;
    }
  };

export default EventsContainer;
