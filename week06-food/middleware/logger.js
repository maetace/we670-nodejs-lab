const logger = (req, res, next) => {
    console.log(`[Logger]: ${req.method} ${req.url}`);
    next(); // ไปยัง middleware หรือ route ถัดไป
};

module.exports = logger;