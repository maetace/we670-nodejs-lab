const express = require('express');
const router = express.Router();

// นำเข้า mock data
const restaurants = require('../data');

// route สำหรับหน้าเว็บหลัก
router.get('/', (req, res) => {
    res.render('main', { restaurants }); // ส่ง restaurants ไปให้ main.ejs
});

module.exports = router;