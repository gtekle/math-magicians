import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul className="nav-list">
      <li className="list-item"><Link to="/">Home</Link></li>
      <li className="list-item"><Link to="/calculator">Calculator</Link></li>
      <li className="list-item"><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default NavBar;
