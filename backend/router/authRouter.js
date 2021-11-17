const {Router} = require('express');
const router = Router();
const authController = require('../ controller/authController');


router.post('/login',authController.login);
router.post('/register',authController.register);



module.exports = router

