// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Brand / Logo */}
      <Link to="/" className="nav-brand">
        MyAccessibleSite
      </Link>

      {/* Main Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Overview</Link>
        </li>
        {/* Add additional links as needed, for example: */}
        <li>
          <Link to="/goals">My Goals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
