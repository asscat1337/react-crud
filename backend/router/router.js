const {Router} = require('express');
const router = Router();

const dashboardController = require('../ controller/dashboardController');


router.get('/get-dashboard',dashboardController.getData);
router.get('/get-state',dashboardController.getState);
router.get('/get-department',dashboardController.getDepartment);
router.post('/add-dashboard',dashboardController.addDashboard)

module.exports = router