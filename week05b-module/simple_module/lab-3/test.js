// test-age
const age = require('./agemodule');
console.log(age.computeAge('1976/10/12'));  // ➜ ควรแสดง 24 หรือ 25 ตามปีปัจจุบัน

// test-student
const Student = require('./studentmodule');
const s1 = new Student("67130893", "Maetee Ninratana", "1976/10/12");
console.log(s1.getStudentInfo());