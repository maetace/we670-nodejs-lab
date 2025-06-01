// assignmentmodule-67130893.js 
// เพื่อรับข้อมูลมูลนักศึกษาผ่านทางพารามิเตอร์ 
// พร้อมทั้งคำนวณวันเกิดของนักศึกษา 
// โดยเขียน api ชื่อ stuinfo เพื่อแสดงผลลัพธ์บน Postman

const express = require('express'); // เรียกใช้ Express.js สำหรับสร้าง Web API
const Student = require('./studentmodule-67130893'); // เรียกใช้คลาส Student ที่เราสร้างไว้แยกใน studentmodule.js

const app = express();  // สร้างอินสแตนซ์ของ Express app
const port = process.env.PORT || 8000; // กำหนดพอร์ตเริ่มต้นของ server

app.use(express.json()); // Middleware สำหรับแปลง request body ให้เป็น JSON (เผื่อใช้ในอนาคตกับ POST)

// Route: รับ path param ทั้งหมดตามที่โจทย์กำหนด
// รูปแบบ URL: /api/stuinfo/:id/:firstname/:lastname/:year/:month/:day
// ตัวอย่าง: http://localhost:8000/api/stuinfo/67130893/Maetee/Ninratana/1976/10/12

app.get('/api/stuinfo/:id/:firstname/:lastname/:year/:month/:day', (req, res) => {
    const { id, firstname, lastname, year, month, day } = req.params; // ดึงค่าจาก path parameters

    const birthdate = `${year}/${month}/${day}`;  // รวมปี/เดือน/วันกลับเป็น string ในรูป yyyy/mm/dd

    const student = new Student(id, firstname, lastname, birthdate); // สร้าง object Student จากค่าที่รับมา

    res.send(student.getStudentInfo()); // ส่งข้อความที่ได้จากเมธอด getStudentInfo() กลับไปยัง client
});

// เริ่มต้น Web Server
// เมื่อโปรแกรมทำงาน จะสามารถเข้าใช้งาน API ได้ผ่าน browser หรือ Postman
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});