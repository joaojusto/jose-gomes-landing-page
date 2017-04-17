import React from 'react';

import './index.scss';

const LINKS = [
  { label: 'Agenda', href: '#Agenda', className: 'Navbar-link' },
  { label: 'Biografia', href: '#Biografia', className: 'Navbar-link' },
  { label: 'Noticias', href: '#Noticias', className: 'Navbar-link' },
  { label: 'Galeria', href: '#Galeria', className: 'Navbar-link' },
  { label: 'Contactar', href: '#Contactar', className: 'Navbar-button' },
]

const renderLinks = () => LINKS.map(({ label, href, className }, key) => (
  <a key={key} className={className} href={href}>{label}</a>
));

const Navbar = () => (
  <div className="Navbar">
    <div className="Navbar-content">
      {renderLinks()}
    </div>
  </div>
);

export default Navbar;
