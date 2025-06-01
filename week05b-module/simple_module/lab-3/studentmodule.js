const ageModule = require('./agemodule');  // นำเข้าโมดูลสำหรับคำนวณอายุ

// คลาส Student ใช้แทนโครงสร้างข้อมูลของนักศึกษา 1 คน
class Student {
    constructor(id, name, birthdate) {
        this.id = id;                       // รหัสนักศึกษา
        this.name = name;                   // ชื่อนักศึกษา
        this.birthdate = birthdate;         // วันเกิด (string ในรูปแบบ yyyy/mm/dd)
        this.age = ageModule.computeAge(birthdate);  // คำนวณอายุจากวันเกิดโดยเรียกใช้ฟังก์ชันจาก agemodule.js
    }

    // เมธอดสำหรับแสดงข้อมูลนักศึกษาในรูปแบบข้อความ (string format)
    getStudentInfo() {
        return `Student Information:\n
        Id: ${this.id}\n
        Name: ${this.name}\n
        Birthdate: ${this.birthdate}\n
        Age: ${this.age}`;
    }
}

// ส่งออกคลาส Student ให้ไฟล์อื่นสามารถนำไปใช้ได้
module.exports = Student;