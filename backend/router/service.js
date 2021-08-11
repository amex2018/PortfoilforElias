const {
    CreateServices, 
    GetServices,
    UpdateServices,
     DeleteServices
    } = require('../controllers/servicesController');
const router = require('express').Router();
const {IsVerify, IsAuthorizeRole} = require('../middleWare/protectUser');

router.route('/admin/services/new').post(IsVerify, IsAuthorizeRole('admin'), CreateServices);
router.route('/services').get(GetServices);
router.route('/admin/services/Update/:id').put(IsVerify, IsAuthorizeRole('admin'), UpdateServices);
router.route('/admin/services/delete/:id').delete(IsVerify, IsAuthorizeRole('admin'), DeleteServices);

module.exports = router