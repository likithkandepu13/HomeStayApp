import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css'; // Import the CSS file

export default function MainNavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">TravelApp</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="search-container">
        <Link className="list-home-button" to="/list-home">List your Home</Link>
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </nav>
  );
}
