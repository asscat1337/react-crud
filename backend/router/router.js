const {Router} = require('express');
const router = Router();

const dashboardController = require('../ controller/dashboardController');
const authJWT = require('../middleware/authJWT')


router.get('/get-dashboard',dashboardController.getData);
router.get('/get-state/:id',dashboardController.getState);
router.get('/get-department',dashboardController.getDepartment);
router.post('/add-dashboard',dashboardController.addDashboard);
router.delete('/delete-dashboard',dashboardController.deleteData);
router.post('/update-dashboard',dashboardController.updateDashboard);
router.post('/add-state',dashboardController.addState)
router.post('/update-state-dashboard',dashboardController.updatePatientState)

module.exports = router