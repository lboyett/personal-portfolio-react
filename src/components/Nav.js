import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 id="luke-logo">LUKE BOYETT</h1>
      </Link>
      <nav className="nav-links">
        <ul className="nav-links-list">
          <Link to="/about">
            <li className="nav-link">About</li>
          </Link>
          <Link to="/portfolio">
            <li className="nav-link">Portfolio</li>
          </Link>
          <Link to="/calendar">
            <li className="nav-link">Calendar</li>
          </Link>
          <Link to="/contact">
            <li className="nav-link">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
