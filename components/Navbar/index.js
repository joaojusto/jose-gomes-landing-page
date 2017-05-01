import React, { Component } from 'react';

import './index.scss';

import Burger from '../Burger';

const LINKS = [
  { label: 'Agenda', href: '#Agenda', className: 'Navbar-link' },
  { label: 'Biografia', href: '#Biografia', className: 'Navbar-link' },
  { label: 'Noticias', href: '#Noticias', className: 'Navbar-link' },
  { label: 'Galeria', href: '#Galeria', className: 'Navbar-link' },
  { label: 'Contactar', href: '#Contactar', className: 'Navbar-button' },
];

const renderLinks = () =>
  LINKS.map(({ label, href, className }, key) => (
    <a key={key} className={className} href={href}>{label}</a>
  ));

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { mobileMenuOpen: false };
  }

  onMobileMenuClick = () =>
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-content">
          {renderLinks()}
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
