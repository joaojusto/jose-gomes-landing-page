import React, { Component } from 'react';
import _ from 'lodash';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const glossary = _(
  requireAll(require.context('../Data/translations', false, /^\.\/.*\.md$/))
)
  .keyBy('title')
  .value();

const availableLanguages = _.keys(glossary).reverse();

const Translations = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { currentLanguage: 'pt' };
    }

    translate = key => glossary[this.state.currentLanguage][key];

    changeLanguage = language => this.setState({ currentLanguage: language });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          translate={this.translate}
          changeLanguage={this.changeLanguage}
          availableLanguages={availableLanguages}
          currentLanguage={this.state.currentLanguage}
          children={this.props.children}
        />
      );
    }
  };

export default Translations;
