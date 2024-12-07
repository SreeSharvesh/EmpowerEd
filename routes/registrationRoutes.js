const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.get('/register', registrationController.getRegistrationForm);

router.post('/register', registrationController.registerUser);

module.exports = router;
