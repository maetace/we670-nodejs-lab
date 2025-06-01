// agemodule-67130893.js
// โมดลสำหรับคำหรับคำนวณหาอายุปัจจุบัน (computeAge)
// โดยรับวับวันเกิดเป็นพารามิเตอร์ ซึ่งมีรูปแบบเป็น yyyy/mm/dd

exports.computeAge = (birthdate) => {
    const today = new Date();

    // แปลง string "yyyy/mm/dd" → [yyyy, mm, dd]
    const [year, month, day] = birthdate.split('/').map(Number);

    // สร้าง Date Object อย่างถูกต้อง โดย month ต้อง -1 (เพราะเริ่มจาก 0)
    const birth = new Date(year, month - 1, day);

    let age = today.getFullYear() - birth.getFullYear();

    // ตรวจสอบว่าเดือน/วันเกิดในปีนี้ถึงหรือยัง ถ้ายัง → -1
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
};