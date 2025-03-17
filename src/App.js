import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './nav/nav';  // นำเข้า Navbar (Sidebar)
import Home from './home/home';
import Activity from './activity/activity';
function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;