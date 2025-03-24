from flask import Flask, request, jsonify
from flask_cors import CORS  # นำเข้า CORS
import numpy as np
from keras.preprocessing import image
from tensorflow.keras.models import load_model
from io import BytesIO
from PIL import Image

app = Flask(__name__)

# เปิดใช้งาน CORS ให้ Flask สามารถรับคำขอจาก localhost:3000
CORS(app)

# โหลดโมเดล
model = load_model('emotion_recognition_model.h5')

# เก็บข้อมูลที่ทำนายรอบล่าสุด (จะต้องใช้ข้อมูลนี้เพื่อให้รู้ว่าผลลัพธ์ในรอบก่อนๆ เป็นอย่างไร)
user_predictions = {}

@app.route('/analyze', methods=['POST'])
def analyze_face():
    if 'image' not in request.files:
        return jsonify({'error': 'No image part'}), 400
    
    img_file = request.files['image']  # รับไฟล์ภาพจาก React
    img = Image.open(img_file.stream)  # เปิดไฟล์ภาพโดยใช้ PIL
    
    # แปลงภาพเป็น RGB (3 ช่องสี) แทนที่ Grayscale (1 ช่องสี)
    img = img.convert('RGB')  # แปลงเป็น RGB
    img = img.resize((96, 96))  # รีไซส์ให้เป็นขนาดที่โมเดลต้องการ (96x96)

    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # เพิ่มมิติให้เป็น (1, 96, 96, 3)
    img_array /= 255.0  # ปรับขนาดให้เป็น 0-1

    # ทำนายผล
    predictions = model.predict(img_array)
    emotion = int(np.argmax(predictions[0]))  # แปลงให้เป็น int ก่อนส่ง

    # เก็บหมายเลขรอบที่ทำนายของผู้ใช้
    if emotion not in user_predictions:
        user_predictions[emotion] = 1
    else:
        user_predictions[emotion] += 1

    # คำแนะนำเพลงหลายๆ เพลงตามอารมณ์
    recommendations = {
        0: ["Happy Song - 'Happy'", "Happy Song - 'ตามใจ'", "Happy Song - 'Uptown Funk'"],
        1: ["Sad Song - 'Someone Like You'", "Sad Song - 'good bye'", "Sad Song - 'สักวันฉันจะหายดี'"],
        2: ["Angry Song - 'Break Stuff'", "Angry Song - 'Killing In the Name'", "Angry Song - 'Faint'"],
        3: ["Surprised Song - 'Uptown Funk'", "Surprised Song - 'Shake It Off'", "Surprised Song - 'Happy'"],
        4: ["Fear Song - 'The Sound of Silence'", "Fear Song - 'Disturbed'", "Fear Song - 'In the End'"],
        5: ["Disgust Song - 'Smells Like Teen Spirit'", "Disgust Song - 'Bodysnatchers'", "Disgust Song - 'Zombie'"],
        6: ["Neutral Song - 'Weightless'", "Neutral Song - 'Sunset Lover'", "Neutral Song - 'Night Owl'"]
    }

    # ดึงคำแนะนำตามหมายเลขรอบ
    round_num = user_predictions[emotion]
    selected_song = recommendations[emotion][round_num % len(recommendations[emotion])]

    return jsonify({'emotion': emotion, 'recommendation': selected_song})

if __name__ == '__main__':
    app.run(debug=True)
