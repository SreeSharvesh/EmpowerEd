const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login', loginController.getLoginForm);

router.post('/login', loginController.loginUser);

module.exports = router;
