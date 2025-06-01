const express = require('express');
const router = express.Router();

// Import the restaurants data
const restaurants = require('../data');

// GET /api/restaurants
router.get('/', (req, res) => {
    res.json(restaurants);
});

// GET /api/restaurants/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id); // แปลง id จาก string เป็น number
    const restaurant = restaurants.find(r => r.id === id);

    if (!restaurant) {
        return res.status(404).json({ message: 'ไม่พบร้านอาหารที่ระบุ' });
    }

    res.json(restaurant);
});

// POST /api/restaurants
router.post('/', (req, res) => {
    const { name, imageURL, type } = req.body;

    // ตรวจสอบความถูกต้องของข้อมูลที่ได้รับ
    if (!name || !imageURL || !type) {
        return res.status(400).json({ message: 'กรุณาระบุข้อมูล name, imageURL และ type ให้ครบถ้วน' });
    }

    // สร้าง ID ใหม่โดยเพิ่มจาก ID สูงสุดที่มีอยู่
    const newId = restaurants.length > 0 ? Math.max(...restaurants.map(r => r.id)) + 1 : 1;

    const newRestaurant = {
        id: newId,
        name,
        imageURL,
        type
    };

    restaurants.push(newRestaurant);

    res.status(201).json(newRestaurant);
});

// PUT /api/restaurants/:id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = restaurants.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'ไม่พบร้านอาหารที่ต้องการแก้ไข' });
    }

    const { name, imageURL, type } = req.body;

    // ตรวจสอบว่า field สำคัญครบหรือไม่
    if (!name || !imageURL || !type) {
        return res.status(400).json({ message: 'กรุณาระบุข้อมูล name, imageURL และ type ให้ครบถ้วน' });
    }

    // อัปเดตข้อมูลร้านอาหาร
    const updatedRestaurant = {
        id,
        name,
        imageURL,
        type
    };

    restaurants[index] = updatedRestaurant;

    res.json(updatedRestaurant);
});

// DELETE /api/restaurants
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = restaurants.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'ไม่พบร้านอาหารที่ต้องการลบ' });
    }

    // ลบออกจาก array
    restaurants.splice(index, 1);

    // ส่ง array ที่เหลือกลับ
    res.json(restaurants);
});

module.exports = router;