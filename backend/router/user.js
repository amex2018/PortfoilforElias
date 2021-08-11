const {RegisterUser, LoginUser, Logout} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route('/register').post(RegisterUser);
router.route('/login').post(LoginUser);
router.route('/logout').post(Logout);

module.exports = router