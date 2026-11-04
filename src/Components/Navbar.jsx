import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';

function Navbar() {
  // Get current location to highlight active link
  const location = useLocation();

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="web-header">
      <div className="container d-flex justify-content-between align-items-center">

        <Link to="/" className="brand-name">
          J<span>&amp;</span>J
          <small> Candle &amp; Gypsum Art</small>
        </Link>

        {/* Navigation Links - NOT Routes */}
        <nav className="top-navbar" role="navigation" aria-label="Main Navigation">
          
          <Link to="/" className={`top-nav-link ${isActive('/')}`}>
            Home
          </Link>

          <Link to="/about" className={`top-nav-link ${isActive('/about')}`}>
            About
          </Link>

          <Link to="/products" className={`top-nav-link ${isActive('/products')}`}>
            Products
          </Link>

          <Link to="/reviews" className={`top-nav-link ${isActive('/reviews')}`}>
            Reviews
          </Link>

          <Link to="/contact" className={`top-nav-link ${isActive('/contact')}`}>
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;