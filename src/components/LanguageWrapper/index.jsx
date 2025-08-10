import React, { Component } from 'react';

class LanguageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentLanguage: 'pt'
    };
  }

  changeLanguage = (language) => {
    this.setState({ currentLanguage: language }, () => {
      // Update all translatable elements on the page
      this.updatePageTranslations();
    });
  };

  getCurrentTranslations = () => {
    const translations = this.props.allTranslations[this.state.currentLanguage] || this.props.allTranslations.pt || {};
    return translations;
  };

  updatePageTranslations = () => {
    // Update translations for all elements
    const currentTranslations = this.getCurrentTranslations();
    
    // Update document elements with data attributes for translations
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (currentTranslations[key]) {
        element.textContent = currentTranslations[key];
      }
    });
  };

  render() {
    const currentTranslations = this.getCurrentTranslations();
    const availableLanguages = Object.keys(this.props.allTranslations);
    
    // Ensure we have fallbacks for SSR
    const translationsToUse = currentTranslations || {};
    const languagesToUse = availableLanguages.length > 0 ? availableLanguages : ['pt', 'en'];
    
    return React.cloneElement(this.props.children, {
      ...this.props.children.props,
      translations: translationsToUse,
      availableLanguages: languagesToUse,
      currentLanguage: this.state.currentLanguage,
      changeLanguage: this.changeLanguage
    });
  }
}

export default LanguageWrapper;