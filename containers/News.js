import React, { Component } from 'react';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const news = requireAll(require.context('../Data/news', false, /^\.\/.*\.md$/));

const NewsContainer = WrappedComponent =>
  class extends Component {
    render() {
      return <WrappedComponent news={news} />;
    }
  };

export default NewsContainer;
