exports.computeAge = (birthdate) => {
    const today = new Date();              // วันที่ปัจจุบัน
    const birth = new Date(birthdate);     // แปลงวันเกิดจาก string → Date

    let age = today.getFullYear() - birth.getFullYear(); // คำนวณความต่างของปี

    // ตรวจสอบว่าถึงเดือนเกิดหรือยัง (ถ้ายัง → ต้องลดอายุลงอีก 1 ปี)
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
};