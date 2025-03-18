import benefitImage from './benefit.png';
import happymindImage from './happymind.png';
import musicImage from './music.png';
import sitemapImage from './sitemap.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="about-us-container">

      {/* รูปภาพแรก + ปุ่มซ้อนบนรูป */}
      <section className="about-image" style={{ position: 'relative', textAlign: 'center' }}>
        <img src={happymindImage} alt="สุขภาพจิต" className="about-image-img" style={{ width: '100%' }} />
        <Link to="/emotionanalyst">
  <button style={{
    position: 'absolute',
    bottom: '100px', // ระยะห่างจากล่าง
    left: '15%', // ปรับตำแหน่ง
    transform: 'translateX(-50%)',
    padding: '12px 30px', // ขนาดปุ่ม
    background: 'linear-gradient(45deg, #FF6B81,rgb(255, 114, 147))', // ไล่สีพื้นหลัง
    color: 'white',
    fontSize: '22px', // ขนาดตัวอักษรใหญ่ขึ้น
    fontWeight: 'bold', // ตัวอักษรหนาขึ้น
    border: '2px solid transparent', // ขอบเริ่มต้นโปร่งใส
    borderRadius: '30px', // มุมโค้งมน
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // เงา
    transition: 'all 0.3s ease', // การเปลี่ยนแปลงเมื่อโฮเวอร์
  }} 
  onMouseOver={(e) => {
    e.target.style.border = '2px solidrgb(254, 254, 254)'; // เปลี่ยนสีขอบเมื่อโฮเวอร์
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // เงาชัดเจนขึ้น
    e.target.style.transform = 'translateX(-50%) translateY(-15px)'; // ขยับปุ่มขึ้นมากขึ้น
  }}
  onMouseOut={(e) => {
    e.target.style.border = '2px solid transparent'; // ขอบกลับเป็นโปร่งใส
    e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; // กลับเงาเดิม
    e.target.style.transform = 'translateX(-50%) translateY(0)'; // ปุ่มกลับมาที่ตำแหน่งเดิม
  }}> 
    GET START
  </button>
</Link>

      </section>

      {/* รูปภาพอื่น ๆ */}
      <section className="about-image">
        <img src={benefitImage} alt="สุขภาพจิต" className="about-image-img" />
      </section>

      <section className="about-image">
        <img src={musicImage} alt="สุขภาพจิต" className="about-image-img" />
      </section>

      <section className="about-image">
        <img src={sitemapImage} alt="สุขภาพจิต" className="about-image-img" />
      </section>

    </div>
  );
};

export default Home;
