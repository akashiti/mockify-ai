const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// Add more routes as needed

module.exports = router;