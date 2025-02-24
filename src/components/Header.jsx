// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ navLinks = [] }) => {
  return (
    <header className="header slide blur-nav">
      <Link to="/" className="logo">Rohit Kavuluri</Link>
      <nav>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
