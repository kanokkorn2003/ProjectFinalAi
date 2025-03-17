import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to MoodRec</h1>
        <p className="home-subtitle">ระบบแนะคอนเทนต์ตามอารมณ์!</p>
      </header>

      <section className="home-images">
        <div className="image-grid">
          {/* แถวที่ 1 */}
          <figure className="image-container">
            <img 
              src="https://i.pinimg.com/736x/07/eb/98/07eb9810f9561f46dcc135ea5b0ab0cf.jpg" 
              alt="Example 1" 
              className="home-image"
            />
            <figcaption className="image-caption">ใบหน้าอารมณ์ปกติ🙂</figcaption>
          </figure>
          
          <figure className="image-container">
            <img 
              src="https://i.pinimg.com/736x/31/1f/ae/311fae2ba2820f7866eb3aa3d1486de8.jpg" 
              alt="Example 2" 
              className="home-image"
            />
            <figcaption className="image-caption">ใบหน้าอารมณ์ดีใจ😄</figcaption>
          </figure>

          <figure className="image-container">
            <img 
              src="https://i.pinimg.com/736x/83/aa/23/83aa23354660a9374a70befd573c2d95.jpg" 
              alt="Example 3" 
              className="home-image"
            />
            <figcaption className="image-caption">ใบหน้าอารมณ์เศร้า😭</figcaption>
          </figure>

          {/* แถวที่ 2 */}
          <figure className="image-container">
            <img 
              src="https://i.pinimg.com/736x/0c/56/3a/0c563ac3f9e5f7f82aa261258caee6de.jpg" 
              alt="Example 4" 
              className="home-image"
            />
            <figcaption className="image-caption">ใบหน้าอารมณ์เบื่อ😑</figcaption>
          </figure>

          <figure className="image-container">
            <img 
              src="https://i.pinimg.com/736x/d7/b7/5b/d7b75bd88bf30ca4034b33b7f20797a8.jpg" 
              alt="Example 5" 
              className="home-image"
            />
            <figcaption className="image-caption">ใบหน้าอารมณ์โกรธ😡</figcaption>
          </figure>

          <figure className="image-container">
            <img 
              src="https://i.pinimg.com/736x/e8/8d/0c/e88d0c35a6b39f9719b8acd4fc3a02e5.jpg" 
              alt="Example 6" 
              className="home-image"
            />
            <figcaption className="image-caption">ใบหน้าอารมณ์ประหลาดใจ😲</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-features">
        <div className="feature">
          <h3>ใบหน้าอารมณ์ปกติ</h3>
          <p>ใบหน้าอารมณ์ปกติเรียบเฉย ดวงตาผ่อนคลาย คิ้วอยู่ระดับปกติ ปากปิดหรือเปิดเล็กน้อย ไม่มีการเกร็งกล้ามเนื้อ.</p>
        </div>
        <div className="feature">
          <h3>ใบหน้าอารมณ์ดีใจ</h3>
          <p>ใบหน้าอารมณ์ดีใจมักมีดวงตาเบิกกว้าง เปล่งประกาย คิ้วยกขึ้นเล็กน้อย ปากยิ้มกว้างหรืออ้าด้วยความตื่นเต้น กล้ามเนื้อใบหน้าตึงแต่ดูสดชื่น.</p>
        </div>
        <div className="feature">
          <h3>ใบหน้าอารมณ์เศร้า</h3>
          <p>ใบหน้าอารมณ์เศร้ามักมีดวงตาหม่นหมองหรือหลุบต่ำ คิ้วขมวดเข้าหากันเล็กน้อย มุมปากตก กล้ามเนื้อใบหน้าดูผ่อนลงหรือแสดงความหนักใจ.</p>
        </div>
        <div className="feature">
          <h3>ใบหน้าอารมณ์เบื่อ</h3>
          <p>ใบหน้าอารมณ์เบื่อมักมีดวงตาลืมครึ่งๆ หรือมองเลื่อนลอย คิ้วและมุมปากอยู่ในระดับปกติหรือหย่อนลงเล็กน้อย กล้ามเนื้อใบหน้าดูผ่อนคลายแต่ไม่มีชีวิตชีวา.</p>
        </div>
        <div className="feature">
          <h3>ใบหน้าอารมณ์โกรธ</h3>
          <p>ใบหน้าอารมณ์โกรธมักมีคิ้วขมวดเข้าหากัน ดวงตาจ้องเขม็งหรือเบิกกว้าง มุมปากเม้มแน่นหรือขบฟัน กล้ามเนื้อใบหน้าตึงและแสดงความกดดันชัดเจน.</p>
        </div>
        <div className="feature">
          <h3>ใบหน้าอารมณ์ประหลาดใจ</h3>
          <p>ใบหน้าอารมณ์ประหลาดใจมักมีดวงตาเบิกกว้าง คิ้วยกสูง ปากอ้าเล็กน้อยหรือเปิดกว้าง กล้ามเนื้อใบหน้าดูตึงแสดงถึงความตื่นเต้นหรือคาดไม่ถึง.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>❀ ดีชั่วอยู่ที่ตัวทำ ขอบตาดำอยู่ที่ยังไม่ได้นอน ❀</p>
      </footer>
    </div>
  );
};

export default Home;
