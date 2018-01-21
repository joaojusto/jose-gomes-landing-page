import React, { Component } from 'react';
import _ from 'lodash';
import chrono from 'chrono-node';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const events = _.chain(
  requireAll(require.context('../Data/events', false, /^\.\/.*\.md$/)),
)
  .map(event => ({ ...event, dateTime: chrono.parseDate(event.dateTime) }))
  .sortBy('dateTime')
  .value();

const EventsContainer = WrappedComponent =>
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} events={events} />;
    }
  };

export default EventsContainer;
