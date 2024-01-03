// routes/index.js
const express = require('express');
const driversController = require('../controllers/driversController');

const router = express.Router();

router.get('/drivers', driversController.getAllDrivers);
router.get('/drivers/:idDriver', driversController.getDriverById);
router.get('/drivers/name', driversController.searchDrivers);
router.post('/drivers', driversController.createDriver);

module.exports = router;
