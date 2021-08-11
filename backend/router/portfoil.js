const express = require('express');
const router = express.Router();
const {CreatePortfoil,  GetPortfoil, UpdatePortfoil, DeletePortfoil} = require('../controllers/portfoilController');
const {IsVerify, IsAuthorizeRole} = require('../middleWare/protectUser');


router.route('/admin/portfoil/new').post(IsVerify,IsAuthorizeRole("admin"),CreatePortfoil);
router.route('/portfoil').get(GetPortfoil);
router.route('/admin/portfoil/update/:id').put(IsVerify, IsAuthorizeRole('admin'),UpdatePortfoil);
router.route('/admin/portfoil/delete/:id').delete(IsVerify, IsAuthorizeRole('admin'), DeletePortfoil);
module.exports = router