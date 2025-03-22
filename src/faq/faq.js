import React, { useState } from "react";
import "./faq.css"; // อย่าลืม import CSS

const faqs = [
  { question: "AI จะแม่นยำแค่ไหนในการวิเคราะห์อารมณ์ของฉัน?", answer: "AI ใช้เทคโนโลยีการวิเคราะห์ใบหน้าเพื่อตรวจจับอารมณ์ของคุณผ่านกล้อง และประมวลผลด้วยอัลกอริธึม Machine Learning" },
  { question: "AI จะแม่นยำแค่ไหนในการวิเคราะห์อารมณ์ของฉัน?", answer: "ระบบของเราถูกฝึกด้วยชุดข้อมูลขนาดใหญ่เพื่อให้แม่นยำที่สุด แต่ผลลัพธ์อาจแตกต่างกันไปขึ้นอยู่กับแสง มุมกล้อง และลักษณะเฉพาะของแต่ละบุคคล" },
  { question: "ฉันต้องเปิดกล้องตลอดเวลาหรือไม่?", answer: " ไม่จำเป็น คุณสามารถเลือกเปิดกล้องเมื่อคุณต้องการให้ AI วิเคราะห์อารมณ์ของคุณเท่านั้น" },
  { question: "AI จะแนะนำกิจกรรมอย่างไร และฉันสามารถเลือกเองได้ไหม?", answer: "AI จะวิเคราะห์อารมณ์ของคุณและแนะนำกิจกรรมที่เหมาะสม เช่น การออกกำลังกาย ฟังเพลง หรืออ่านบทความสร้างแรงบันดาลใจ แต่คุณสามารถเลือกทำกิจกรรมอื่นๆ ตามต้องการ" },
  { question: "ฉันสามารถใช้ AI นี้บนอุปกรณ์ใดบ้าง?", answer: "คุณสามารถใช้ผ่านเว็บเบราว์เซอร์ได้ทั้งบนคอมพิวเตอร์ สมาร์ทโฟน และแท็บเล็ต โดยไม่ต้องดาวน์โหลดแอปพลิเคชัน" },
  { question: "ต้องสมัครสมาชิกหรือล็อกอินเพื่อใช้งานหรือไม่?", answer: "ไม่จำเป็น! คุณสามารถเข้าใช้ AI วิเคราะห์อารมณ์และรับคำแนะนำกิจกรรมได้ทันทีโดยไม่ต้องสมัครหรือล็อกอิน" },
  { question: "เว็บจะเก็บข้อมูลของฉันไว้หรือไม่?", answer: "ไม่! เราไม่ได้เก็บหรือบันทึกข้อมูลใบหน้าหรืออารมณ์ของคุณ ระบบจะวิเคราะห์แบบเรียลไทม์และไม่จัดเก็บข้อมูลส่วนตัวใดๆ" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title"> Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            {faq.question}
            <span className="faq-icon">{openIndex === index ? "➖" : "➕"}</span>
          </div>
          <div className="faq-answer">{openIndex === index && <p>{faq.answer}</p>}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;