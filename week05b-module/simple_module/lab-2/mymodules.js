class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getUserStats() {
        return `
  Name: ${this.name}
  Age: ${this.age}
  Email: ${this.email}
  `;
    }
}

// ส่งออกทั้ง class ไปให้ไฟล์อื่นใช้ได้
module.exports = User;