const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/create', userController.createNewUser);
router.get('/get', userController.findall);

module.exports = router;
