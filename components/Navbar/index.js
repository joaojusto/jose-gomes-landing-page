import React, { Component } from 'react';
import classNames from 'classnames';

import './index.scss';

import Burger from '../Burger';

const LINKS = [
  { label: 'navbar.agenda', href: '#Agenda', className: 'Navbar-link' },
  { label: 'navbar.biography', href: '#Biografia', className: 'Navbar-link' },
  { label: 'navbar.news', href: '#Noticias', className: 'Navbar-link' },
  { label: 'navbar.gallery', href: '#Galeria', className: 'Navbar-link' },
  { label: 'navbar.contact', href: '#Contactar', className: 'Navbar-button' }
];

const renderLinks = translate =>
  LINKS.map(({ label, href, className }, key) => (
    <a key={key} className={className} href={href}>
      {translate(label)}
    </a>
  ));

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { mobileMenuOpen: false };
  }

  onMobileMenuClick = () =>
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });

  render() {
    const overlayClass = classNames({
      'Navbar-overlay': true,
      'is-open': this.state.mobileMenuOpen
    });

    return (
      <div className="Navbar">
        <div className={overlayClass}>{renderLinks(this.props.translate)}</div>
        <div className="Navbar-content">
          {renderLinks(this.props.translate)}
          <div className="Navbar-languages">
            {this.props.availableLanguages.map(language => (
              <a
                key={language}
                className={`Navbar-languageButton ${language ===
                this.props.currentLanguage
                  ? 'is-active'
                  : ''}`}
                onClick={() => this.props.changeLanguage(language)}
              >
                {language.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <div className="Navbar-mobileButton">
          <Burger
            isOpen={this.state.mobileMenuOpen}
            onClick={this.onMobileMenuClick}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
