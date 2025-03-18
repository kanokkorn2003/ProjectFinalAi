import contactImage from './contact.png';


const Contact = () => {
  return (
    <div className="about-us-container">
      {/* Header Section /}
      <header className="about-header">
        {/ สามารถเพิ่มเนื้อหาหรือข้อความในส่วนนี้ได้ /}
      </header>

      {/ contactImage Section */}
      <section className="about-image">
        <img
          src={contactImage} // เปลี่ยนเป็นลิงก์ภาพที่ต้องการ
          alt="สุขภาพจิต"
          className="about-image-img"
        />
      </section>
    </div>
  );
};

export default Contact;