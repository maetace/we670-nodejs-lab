const express = require('express');
const Student = require('./studentmodule');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/api/stuinfo/:id/:name/:birthdate', (req, res) => {
    const { id, name, birthdate } = req.params;

    const student = new Student(id, name, birthdate);

    res.send(student.getStudentInfo());
});

app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});