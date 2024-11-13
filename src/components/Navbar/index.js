import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/rules">Rules</Link>
    <Link to="/game/easy">Easy</Link>
    <Link to="/game/medium">Medium</Link>
    <Link to="/game/hard">Hard</Link>
  </nav>
);

export default Navbar;