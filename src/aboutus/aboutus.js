import React from 'react';
import './aboutus.css'; // ใช้สำหรับการจัดแต่งสไตล์ของหน้า
import aboutusImage from './aboutus.png';
import ourvitionImage from './ourvition.png';
import logoImage from './logo.png'; // นำเข้าโลโก้ของคุณ //อันนี้
import { Link } from "react-router-dom"; // เพิ่ม Link จาก react-router-dom

const aboutus = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="about-header">
        
      </header>

      {/* Image Section */}
      <section className="about-image">
        <img
          src={aboutusImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>

     

     {/* Image Section */}
     <section className="about-image">
        <img
          src={ourvitionImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>
    
       {/* Footer Section */}
       <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-contact">
              <h3>CONTACT</h3>
              <p>02-584-9568</p>
              <p> Happymind@gmail.com</p>
            </div>
            <div className="footer-links">
              <h3>SITE MAP</h3>
              <div className="link-item">
                <Link to="/" className="link-text">HOME</Link>
              </div>
              <div className="link-item">
                <Link to="/emotionanalyst" className="link-text">EMOTION ANALYST</Link>
              </div>
              <div className="link-item">
                <Link to="/aboutus" className="link-text">ABOUT US</Link>
              </div>
              <div className="link-item">
                <Link to="/contact" className="link-text">CONTACT</Link>
              </div>
            </div>
            <div className="footer-sitemap">
              <img src={logoImage} alt="Logo" className="logo" />
            </div>
          </div>
          <div className="footer-bottom">
          </div>
        </div>
      </footer>
  


    </div>
  );
};

export default aboutus;