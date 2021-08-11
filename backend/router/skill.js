const express = require('express');
const router = express.Router();
const {SkillCreate, GetSkill, UpdateSkill, DeleteSkill} = require('../controllers/skillController');
const {IsVerify, IsAuthorizeRole} = require('../middleWare/protectUser');


router.route('/skill/new').post(IsVerify,IsAuthorizeRole('admin'),SkillCreate);
router.route('/skills').get(GetSkill);
router.route('/skill/update/:id').put(IsVerify,IsAuthorizeRole('admin'),UpdateSkill);
router.route('/skill/delete/:id').delete(IsVerify, IsAuthorizeRole('admin'), DeleteSkill);

module.exports = router