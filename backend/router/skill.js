const express = require('express');
const router = express.Router();
const {SkillCreate} = require('../controllers/skillController');
const {IsVerify, IsAuthorizeRole} = require('../middleWare/protectUser');


router.route('/skill/new').post(IsVerify,IsAuthorizeRole('admin'),SkillCreate)

module.exports = router