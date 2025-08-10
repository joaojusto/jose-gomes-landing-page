import React, { Component } from 'react';
import classNames from 'classnames';

import '../Navbar/index.scss';

import Burger from '../Burger/index.jsx';
import { translate } from '../../utils/translate';

const LINKS = [
  { label: 'navbar.agenda', href: '#Agenda', className: 'Navbar-link' },
  { label: 'navbar.biography', href: '#Biografia', className: 'Navbar-link' },
  { label: 'navbar.news', href: '#Noticias', className: 'Navbar-link' },
  { label: 'navbar.gallery', href: '#Galeria', className: 'Navbar-link' },
  { label: 'navbar.contact', href: '#Contactar', className: 'Navbar-button' }
];

class NavbarWithLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobileMenuOpen: false,
      currentLanguage: 'pt'
    };
  }

  onMobileMenuClick = () =>
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });

  changeLanguage = (language) => {
    this.setState({ currentLanguage: language }, () => {
      // Update all elements with data-translate attributes
      this.updatePageTranslations();
      
      // Dispatch custom event for React components to listen to
      const languageChangeEvent = new CustomEvent('languageChange', {
        detail: {
          language: language,
          translations: this.getCurrentTranslations()
        }
      });
      window.dispatchEvent(languageChangeEvent);
    });
  };

  getCurrentTranslations = () => {
    return this.props.allTranslations[this.state.currentLanguage] || this.props.allTranslations.pt || {};
  };

  updatePageTranslations = () => {
    const currentTranslations = this.getCurrentTranslations();
    const currentLanguage = this.state.currentLanguage;
    
    // Update all elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (currentTranslations[key]) {
        // For Quote component, keep the quotes
        if (key === 'quote') {
          element.textContent = `"${currentTranslations[key]}"`;
        } else {
          element.textContent = currentTranslations[key];
        }
      }
    });
    
    // Update Biography PDF download link
    const biographyLink = document.querySelector('a[href*="/bio_"]');
    if (biographyLink) {
      biographyLink.href = `/bio_${currentLanguage}.pdf`;
    }
  };

  renderLinks = () => {
    const translations = this.getCurrentTranslations();
    
    return LINKS.map(({ label, href, className }, key) => (
      <a key={key} className={className} href={href}>
        {translate(translations, label)}
      </a>
    ));
  };

  renderLanguages = () => {
    const availableLanguages = Object.keys(this.props.allTranslations);
    
    return availableLanguages.map(language => (
      <a
        key={language}
        className={`Navbar-languageButton ${language === this.state.currentLanguage ? 'is-active' : ''}`}
        onClick={() => this.changeLanguage(language)}
      >
        {language.toUpperCase()}
      </a>
    ));
  };

  render() {
    const navbarClass = classNames({
      Navbar: true,
      'is-scrolled': this.props.isScrolled,
      'is-overlay-open': this.state.mobileMenuOpen
    });

    return (
      <div className={navbarClass}>
        <div className="Navbar-overlay">
          {this.renderLinks()}
          <div className="Navbar-languages">{this.renderLanguages()}</div>
        </div>
        <div className="Navbar-contentWrapper">
          <div className="Navbar-content">
            {this.renderLinks()}
            <div className="Navbar-languages">{this.renderLanguages()}</div>
          </div>
          <div className="Navbar-mobileButton">
            <Burger
              isOpen={this.state.mobileMenuOpen}
              onClick={this.onMobileMenuClick}
            />
          </div>
        </div>
        <div className="Navbar-background" />
      </div>
    );
  }
}

export default NavbarWithLanguages;