
import benefitImage from './benefit.png';
import happymindImage from './happymind.png';
import musicImage from './music.png';

const Home = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="about-header">
        {/* สามารถเพิ่มเนื้อหาหรือข้อความในส่วนนี้ได้ */}
      </header>

 {/* Image Section */}
 <section className="about-image">
        <img
          src={happymindImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>




      {/* benefitImage Section */}
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
          src={musicImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>



    </div>
  );
};

export default Home;
