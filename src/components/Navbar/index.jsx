import React, { Component } from 'react';
import classNames from 'classnames';

import './index.scss';

import Burger from '../Burger/index.jsx';
import { translate } from '../../utils/translate';

const LINKS = [
  { label: 'navbar.agenda', href: '#Agenda', className: 'Navbar-link' },
  { label: 'navbar.biography', href: '#Biografia', className: 'Navbar-link' },
  { label: 'navbar.news', href: '#Noticias', className: 'Navbar-link' },
  { label: 'navbar.gallery', href: '#Galeria', className: 'Navbar-link' },
  { label: 'navbar.contact', href: '#Contactar', className: 'Navbar-button' }
];

const renderLinks = translations =>
  LINKS.map(({ label, href, className }, key) => (
    <a key={key} className={className} href={href}>
      {translate(translations || {}, label)}
    </a>
  ));

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileMenuOpen: false };
  }

  onMobileMenuClick = () =>
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });

  renderLanguages = () => {
    // Safety check for SSR
    const languages = this.props.availableLanguages || ['pt', 'en'];
    const currentLang = this.props.currentLanguage || 'pt';
    const changeFunc = this.props.changeLanguage || (() => console.log('Language change not available'));
    
    return languages.map(language => (
      <a
        key={language}
        className={`Navbar-languageButton ${language === currentLang ? 'is-active' : ''}`}
        onClick={() => changeFunc(language)}
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
          {renderLinks(this.props.translations)}
          <div className="Navbar-languages">{this.renderLanguages()}</div>
        </div>
        <div className="Navbar-contentWrapper">
          <div className="Navbar-content">
            {renderLinks(this.props.translations)}
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

export default Navbar;
