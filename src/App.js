import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './nav/nav';  // นำเข้า Navbar (Sidebar)
import Home from './home/home';
import EmotionAnalyst from './emotionanalyst/emotionanalyst';  // แก้ชื่อให้ตรง
import Aboutus from './aboutus/aboutus';
import Contact from './contact/contact';
import FAQ from './faq/faq';


function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emotionanalyst" element={<EmotionAnalyst />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
