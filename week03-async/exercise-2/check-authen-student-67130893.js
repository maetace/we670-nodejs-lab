// ฟังก์ชัน checkAuth ทำหน้าที่ตรวจสอบข้อมูล authentication
function checkAuth(id, password) {
    return new Promise((resolve, reject) => {
        // จำลองการทำงานแบบ asynchronous ด้วย setTimeout (1 วินาที)
        setTimeout(() => {
            // กำหนดค่าคงที่ให้ตัวแปร authData
            const authData = 'xdfjsiu#fg@dc';

            // ตรวจสอบว่าข้อมูลที่รับเข้ามาตรงกับที่กำหนดไว้หรือไม่
            if (id === 15 && password === 'P@ssw0rd') {
                console.log('✅ User Authenticated'); // แสดงข้อความว่า authenticated แล้ว
                // ส่งค่ากลับเมื่อสำเร็จในรูปแบบ object ที่มี id, password และ authData
                resolve({ id, password, authData });
            } else {
                // กรณี authentication ล้มเหลว → ส่ง Error กลับ
                reject(new Error('❌ Unauthenticated user'));
            }
        }, 1000); // delay 1000 มิลลิวินาที
    });
}

// ฟังก์ชัน getStudentData ใช้เพื่อดึงข้อมูลของนักศึกษาจาก auth ที่ได้จาก checkAuth
function getStudentData(auth) {
    return new Promise((resolve, reject) => {
        // จำลองการทำงานแบบ delay ด้วย setTimeout (2 วินาที)
        setTimeout(() => {
            // ตรวจสอบ auth ว่าตรงกับ authData ที่ถูกต้องหรือไม่
            if (auth.authData === 'xdfjsiu#fg@dc') {
                // ส่งข้อมูลนักศึกษาและสิทธิการใช้งานกลับเมื่อสำเร็จ
                resolve({ name: 'Suchada', permission: 'member' });
            } else {
                // ถ้าไม่ตรง → ส่ง Error กลับ
                reject(new Error('❌ Could not find student'));
            }
        }, 2000); // delay 2000 มิลลิวินาที
    });
}

// ฟังก์ชันหลัก getAuthResult ใช้เรียกใช้ทั้ง 2 เมธอดแบบ async/await
async function getAuthResult() {
    try {
        // เรียกใช้งาน checkAuth แบบ asynchronous โดยรอผลลัพธ์
        const auth = await checkAuth(15, 'P@ssw0rd');

        // หาก checkAuth สำเร็จ → เรียก getStudentData ต่อทันที
        const student = await getStudentData(auth);

        // แสดงข้อมูลนักศึกษาที่ได้จาก getStudentData
        console.log('✅ Student Info:', student);
    } catch (err) {
        // หากเกิด error จากฟังก์ชันใดฟังก์ชันหนึ่ง จะแสดงข้อความ error
        console.log('❌ Error:', err.message);
    }
}

// เรียกใช้ฟังก์ชัน getAuthResult() เพื่อเริ่มกระบวนการตรวจสอบและแสดงผล
getAuthResult();