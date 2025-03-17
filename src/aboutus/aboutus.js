import React from 'react';
import './aboutus.css'; // ใช้สำหรับการจัดแต่งสไตล์ของหน้า
import aboutusImage from './aboutus.png';
import benefitImage from './benefit.png';
import endImage from './end.png';

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
          src={benefitImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>

     {/* Image Section */}
       <section className="about-image">
        <img
          src={endImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>
     
    
     
    </div>
  );
};

export default aboutus;
