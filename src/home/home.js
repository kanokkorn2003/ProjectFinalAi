
import benefitImage from './benefit.png';


const Home = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="about-header">
        {/* สามารถเพิ่มเนื้อหาหรือข้อความในส่วนนี้ได้ */}
        <h1>เกี่ยวกับเรา</h1>
      </header>

      {/* benefitImage Section */}
      <section className="about-image">
        <img
          src={benefitImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>
    </div>
  );
};

export default Home;
