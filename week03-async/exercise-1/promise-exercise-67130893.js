// สร้างฟังก์ชันชื่อ getStudent โดยรับพารามิเตอร์ id
function getStudent(id) {
  return new Promise((resolve, reject) => {
    // กำหนด setTimeout เพื่อจำลอง delay 2000 ms
    setTimeout(() => {
      // กำหนดตัวแปร name เป็นค่าคงที่ 'Suchada'
      const name = 'Suchada'; // เปลี่ยนเป็น null เพื่อทดสอบ error case ได้

      // ตรวจสอบเงื่อนไข ถ้ามี name → สำเร็จ
      if (name) {
        // ส่งข้อมูล id และ name กลับในรูปแบบ object
        resolve({ id, name });
      } else {
        // ถ้าไม่มี name → สร้าง object จาก Error ด้วยข้อความ "Cannot get the result"
        reject(new Error('Cannot get the result'));
      }
    }, 2000); // Delay 2000 มิลลิวินาที
  });
}

// แสดงข้อความก่อนเรียกใช้งาน Promise เพื่อเปรียบเทียบความไม่บล็อก
console.log('Before getStudent()');

// เรียกใช้งานฟังก์ชัน getStudent โดยส่ง id จริง
getStudent(1)
  // ถ้า Promise สำเร็จ แสดงข้อมูล
  .then(result => {
    console.log('✅ Student Info:', result);
  })
  // ถ้า Promise ล้มเหลว แสดง error message
  .catch(err => {
    console.log('❌ Error:', err.message);
  });

// แสดงข้อความหลังเรียก getStudent เพื่อยืนยัน non-blocking execution
console.log('After getStudent()');
