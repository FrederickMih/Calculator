import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="main-menu">
    <h3 className="menu-logo">
      <Link to="/">Math Magicians</Link>
    </h3>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/app">App</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
