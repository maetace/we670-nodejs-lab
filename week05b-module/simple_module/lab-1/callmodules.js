// เรียกใช้โมดูลที่เราสร้างขึ้น
const cm = require('./ownmodules');

// สร้าง express app ง่าย ๆ
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// Middleware สำหรับ JSON
app.use(express.json());

// สร้าง route เพื่อแสดงข้อมูลจาก ownmodules.js
app.get('/api/date', (req, res) => {
    res.write("The date and time is currently: " + cm.myDateTime());
    res.write("\nCreated by: " + cm.mySchool());
    res.end();
    //res.send(`The date and time is currently: ${cm.myDateTime()} \n Created by: ${cm.myName()}`);
});

// เริ่มต้น server
app.listen(port, '127.0.0.1', () => {
    console.log(`Listening to request on port ${port}`);
});