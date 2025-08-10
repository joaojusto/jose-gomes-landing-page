import React, { Component } from 'react';
import { translate } from '../../utils/translate';

class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentLanguage: 'pt'
    };
  }

  changeLanguage = (language) => {
    this.setState({ currentLanguage: language });
  };

  getCurrentTranslations = () => {
    return this.props.translations[this.state.currentLanguage] || this.props.translations.pt;
  };

  translate = (key) => {
    return translate(this.getCurrentTranslations(), key);
  };

  render() {
    return React.cloneElement(this.props.children, {
      ...this.props.children.props,
      translations: this.getCurrentTranslations(),
      availableLanguages: Object.keys(this.props.translations),
      currentLanguage: this.state.currentLanguage,
      changeLanguage: this.changeLanguage,
      translate: this.translate
    });
  }
}

export default LanguageProvider;