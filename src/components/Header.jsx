// Header.js
import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div className="logo">Gym AI</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
