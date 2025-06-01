const express = require('express');
const restaurantsRouter = require('./routes/restaurants');
const indexRouter = require('./routes/index');

const logger = require('./middleware/logger');

const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));     // ตั้ง path สำหรับไฟล์ .ejs
app.set('view engine', 'ejs');                       // ใช้ ejs เป็น template engine

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use('/', indexRouter);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Food Project API');
});

// Routes
app.use('/api/restaurants', restaurantsRouter);

app.listen(port, '127.0.0.1', () => {
    console.log(`Listening to request on port ${port}`);
});

