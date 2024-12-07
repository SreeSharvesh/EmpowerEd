const express = require('express');
const router = express.Router();
const myPostController = require('../controllers/myPostController');

router.get('/myPost', myPostController.getmyPosts);

module.exports = router;
