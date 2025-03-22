import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './emotionanalyst.css'; // ดึงไฟล์ CSS มาใช้

const EmotionAnalyst = () => {
  const [recommendation, setRecommendation] = useState('');
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    sendImageToBackend(imageSrc);
  };

  const convertBase64ToBlob = (base64) => {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset++) {
      const byte = byteCharacters.charCodeAt(offset);
      byteArrays.push(byte);
    }
    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: 'image/jpeg' });
  };

  const sendImageToBackend = async (imageSrc) => {
    const imageBlob = convertBase64ToBlob(imageSrc);
    const formData = new FormData();
    formData.append('image', imageBlob, 'image.jpg');

    try {
      const response = await axios.post('http://localhost:5000/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error('Error sending image:', error);
    }
  };

  return (
    <div className="emotion-container">
      <h1>HOW DO YOU FEEL?</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
        style={{ transform: 'scaleX(-1)' }}  // กลับด้านซ้ายขวา
        videoConstraints={{
          facingMode: 'user',
          width: 1280,
          height: 720,
        }}
      />
      <button className="capture-btn" onClick={captureImage}>🔴 </button>

      {recommendation && (
        <div className="result-box">
          🎵 <strong>Recommendation:</strong> {recommendation}
        </div>
      )}
    </div>
  );
};

export default EmotionAnalyst;
