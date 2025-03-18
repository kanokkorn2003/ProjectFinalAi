import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // ใช้ไฟล์ CSS สำหรับสไตล์ของ Nav
import logoImage from './logo.png'; // นำเข้าโลโก้ของคุณ

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} alt="Logo" className="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/emotionanalyst" className="nav-link">EMOTION ANALYST</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;