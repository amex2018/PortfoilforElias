const express = require('express');
const router = express.Router();
const {SkillCreate} = require('../controllers/skillController');
const {IsVerify} = require('../middleWare/protectUser');


router.route('/skill/new').post(IsVerify,SkillCreate)

module.exports = router