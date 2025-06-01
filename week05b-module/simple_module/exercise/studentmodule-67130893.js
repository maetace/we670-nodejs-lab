// studentmodule-67130893.js
// โมดูลนักศึกษา (Student) ซึ่งประกอบด้วย รหัสนักศึกษา ชื่อจริง นามสกุล และวันเกิดของนักศึกษา

const ageModule = require('./agemodule-67130893');  // นำเข้าโมดูลสำหรับคำนวณอายุ

// คลาส Student ใช้แทนโครงสร้างข้อมูลของนักศึกษา 1 คน
class Student {
    constructor(id, firstname, lastname, birthdate) {
        this.id = id;                       // รหัสนักศึกษา
        this.firstname = firstname;         // ชื่อจริง
        this.lastname = lastname;           // นามสกุล
        this.birthdate = birthdate;         // วันเกิด
        this.age = ageModule.computeAge(birthdate);  // คำนวณอายุ
    }

    // เมธอดสำหรับแสดงข้อมูลนักศึกษาในรูปแบบข้อความ (string format)
    getStudentInfo() {
        return `Student Information:\n\n` +
            `Id: ${this.id}\n\n` +
            `Name: ${this.firstname} ${this.lastname}\n\n` +
            `Birthdate: ${this.birthdate}\n\n` +
            `Age: ${this.age}`;
    }
}

// ส่งออกคลาส Student ให้ไฟล์อื่นสามารถนำไปใช้ได้
module.exports = Student;