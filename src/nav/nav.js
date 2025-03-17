import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';  // ใช้ไฟล์ CSS สำหรับสไตล์ของ Nav

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/activity" className="nav-link">Activity</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
