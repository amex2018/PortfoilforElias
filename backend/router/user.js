const {RegisterUser, LoginUser} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route('/register').post(RegisterUser);
router.route('/login').post(LoginUser);

module.exports = router