const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

router.get('/upload', uploadController.getUploadForm);

router.post('/upload', uploadController.uploadPost);

module.exports = router;
