const {Router} = require('express');
const router = Router();
const adminController = require('../ controller/adminController');
const storageConfig = require('../middleware/fileUpload')
const multer = require('multer')



router.get('/show',adminController.showListUser);
router.post('/add',adminController.addListUser);
router.post('/download',multer({storage:storageConfig}).single('file'),adminController.downloadFiles);




module.exports = router;