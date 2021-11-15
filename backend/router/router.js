const {Router} = require('express');
const router = Router();

const dashboardController = require('../ controller/dashboardController');


router.get('/get-dashboard',dashboardController.getData);
router.get('/get-state',dashboardController.getState);
router.get('/get-department',dashboardController.getDepartment);
router.post('/add-dashboard',dashboardController.addDashboard);
router.delete('/delete-dashboard',dashboardController.deleteData)
router.post('/update-dashboard',dashboardController.updateDashboard)

module.exports = router