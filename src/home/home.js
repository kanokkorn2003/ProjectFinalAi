import React from 'react';
import benefitImage from './benefit.png';
import happymindImage from './happymind.png';
import musicImage from './music.png';
import { Link } from 'react-router-dom';
import podcastImage from './podcast.png';

const Home = () => {
  return (
    <div className="about-us-container">
      {/* รูปภาพแรก + ปุ่มซ้อนบนรูป */}
      <section className="about-image" style={{ position: 'relative', textAlign: 'center' }}>
        <img src={happymindImage} alt="สุขภาพจิต" className="about-image-img" style={{ width: '100%' }} />
        <Link to="/emotionanalyst">
          <button
            style={{
              position: 'absolute',
              bottom: '100px',
              left: '15%',
              transform: 'translateX(-50%)',
              padding: '12px 30px',
              background: 'linear-gradient(45deg, #FF6B81,rgb(255, 114, 147))',
              color: 'white',
              fontSize: '22px',
              fontWeight: 'bold',
              border: '2px solid transparent',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '2px solid rgb(254, 254, 254)';
              e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(-15px)';
            }}
            onMouseOut={(e) => {
              e.target.style.border = '2px solid transparent';
              e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
              e.target.style.transform = 'translateX(-50%) translateY(0)';
            }}
            onClick={(e) => {
              e.target.style.transform = 'translateX(-50%) translateY(3px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            GET START
          </button>
        </Link>
      </section>

      {/* รูปภาพอื่น ๆ */}
      <section className="about-image">
        <img src={benefitImage} alt="สุขภาพจิต" className="about-image-img" />
      </section>

      {/* รูปภาพที่มีปุ่มหลายปุ่ม */}
      <section className="about-image" style={{ position: 'relative', textAlign: 'center' }}>
        <img src={musicImage} alt="สุขภาพจิต" className="about-image-img" style={{ width: '100%' }} />
        
        {/* ปุ่ม 1 */}
        <a href="https://www.youtube.com/watch?v=0idxd036vh8" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              position: 'absolute',
              bottom: '85px',
              left: '17%',
              transform: 'translateX(-50%)',
              padding: '12px 20px',
              background: 'linear-gradient(45deg, #ff6b81, #ff9b9b)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'normal',
              textAlign: 'center',
              wordBreak: 'break-word',
              width: '350px',
              fontFamily: 'Open Sauce Sans, sans-serif',
              height: '90px',
              lineHeight: '1.5',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '2px solid rgb(254, 254, 254)';
              e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(-15px)';
            }}
            onMouseOut={(e) => {
              e.target.style.border = 'none';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(0)';
            }}
            onClick={(e) => {
              e.target.style.transform = 'translateX(-50%) translateY(3px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            เพลงที่ทำให้รู้สึกดีขึ้น <br /> "รักติดไซเรน" - ไอซ์ พาริส, แพรวา
          </button>
        </a>

        {/* ปุ่ม 2 */}
        <a href="https://www.youtube.com/watch?v=16-wFAbvQiU" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              position: 'absolute',
              bottom: '85px',
              left: '50.5%',
              transform: 'translateX(-50%)',
              padding: '12px 20px',
              background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
              color: 'white',
              fontSize: '17px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'normal',
              textAlign: 'center',
              wordBreak: 'break-word',
              width: '350px',
              fontFamily: 'Arial, Open Sauce',
              height: '90px',
              lineHeight: '1.5',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '2px solid rgb(254, 254, 254)';
              e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(-15px)';
            }}
            onMouseOut={(e) => {
              e.target.style.border = 'none';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(0)';
            }}
            onClick={(e) => {
              e.target.style.transform = 'translateX(-50%) translateY(3px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            เพลงเพื่อการผ่อนคลาย <br /> "แค่คุณ" - Muskeeteers
          </button>
        </a>

        {/* ปุ่ม 3 */}
        <a href="https://www.youtube.com/watch?v=HC58Dt2M-ao" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              position: 'absolute',
              bottom: '85px',
              left: '83.5%',
              transform: 'translateX(-50%)',
              padding: '12px 20px',
              background: 'linear-gradient(45deg, #ffb347, rgb(249, 220, 136))',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'normal',
              textAlign: 'center',
              wordBreak: 'break-word',
              width: '350px',
              fontFamily: 'Open Sauce Sans, sans-serif',
              height: '90px',
              lineHeight: '1.5',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '2px solid rgb(254, 254, 254)';
              e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(-15px)';
            }}
            onMouseOut={(e) => {
              e.target.style.border = 'none';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(0)';
            }}
            onClick={(e) => {
              e.target.style.transform = 'translateX(-50%) translateY(3px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            เพลงให้กำลังใจ <br /> "ยิ้ม" - ปราโมทย์ ปาทาน, ปองกูล สืบซึ้ง
          </button>
        </a>
      </section>

      {/* รูปภาพอื่น ๆ มีปุ่มไปยังยูทูป 3 ปุ่ม */}
      <section className="about-image" style={{ position: 'relative', textAlign: 'center' }}>
        <img src={podcastImage} alt="สุขภาพจิต" className="about-image-img" style={{ width: '100%' }} />
        
        {/* ปุ่ม 1 */}
        <a href="https://www.youtube.com/watch?v=u27TwLo1EkY&t=2s" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              position: 'absolute',
              bottom: '85px',
              left: '17%',
              transform: 'translateX(-50%)',
              padding: '12px 20px',
              background: 'linear-gradient(45deg, #ff6b81, #ff9b9b)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'normal',
              textAlign: 'center',
              wordBreak: 'break-word',
              width: '350px',
              fontFamily: 'Open Sauce Sans, sans-serif',
              height: '90px',
              lineHeight: '1.5',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '2px solid rgb(254, 254, 254)';
              e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(-15px)';
            }}
            onMouseOut={(e) => {
              e.target.style.border = 'none';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateX(-50%) translateY(0)';
            }}
            onClick={(e) => {
              e.target.style.transform = 'translateX(-50%) translateY(3px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            ข้อความฮีลใจ เมื่อโลกใจร้าย <br /> "ลอง La Bye Podcast"
          </button>
        </a>

        <a href="https://www.youtube.com/watch?v=3J2yudq8tgw&t=18s" target="_blank" rel="noopener noreferrer">
    <button
      style={{
        position: 'absolute',
        bottom: '85px',
        left: '50.5%',
        transform: 'translateX(-50%)',
        padding: '12px 20px',
        background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
        color: 'white',
        fontSize: '17px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        whiteSpace: 'normal',
        textAlign: 'center',
        wordBreak: 'break-word',
        width: '350px',
        fontFamily: 'Arial, Open Sauce',
        height: '90px',
        lineHeight: '1.5',
      }}
      onMouseOver={(e) => {
        e.target.style.border = '2px solid rgb(254, 254, 254)';
        e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        e.target.style.transform = 'translateX(-50%) translateY(-15px)';
      }}
      onMouseOut={(e) => {
        e.target.style.border = 'none';
        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        e.target.style.transform = 'translateX(-50%) translateY(0)';
      }}
      onClick={(e) => {
        e.target.style.transform = 'translateX(-50%) translateY(3px)';
        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      }}
    >
      ให้กำลังใจตัวเองยังไง ในวันที่ไม่โอเค <br />  "R U OK MEDLEY"
    </button>
  </a>

  <a href="https://www.youtube.com/watch?v=U7d1-_SWJv4&t=103s" target="_blank" rel="noopener noreferrer">
    <button
      style={{
        position: 'absolute',
        bottom: '85px',
        left: '83.5%',
        transform: 'translateX(-50%)',
        padding: '12px 20px',
        background: 'linear-gradient(45deg, #ffb347, rgb(249, 220, 136))',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        whiteSpace: 'normal',
        textAlign: 'center',
        wordBreak: 'break-word',
        width: '350px',
        fontFamily: 'Open Sauce Sans, sans-serif',
        height: '90px',
        lineHeight: '1.5',
      }}
      onMouseOver={(e) => {
        e.target.style.border = '2px solid rgb(254, 254, 254)';
        e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        e.target.style.transform = 'translateX(-50%) translateY(-15px)';
      }}
      onMouseOut={(e) => {
        e.target.style.border = 'none';
        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        e.target.style.transform = 'translateX(-50%) translateY(0)';
      }}
      onClick={(e) => {
        e.target.style.transform = 'translateX(-50%) translateY(3px)';
        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      }}
    >
      การจัดการความเครียดด้วยตนเอง <br /> "Mahidol Channe"
    </button>
  </a>
</section>

    </div>
  );
};

export default Home;
