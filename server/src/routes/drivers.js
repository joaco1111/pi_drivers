// routes/drivers.js
const express = require('express');
const router = express.Router();
const {
  getAllDrivers,
  getDriverById,
  searchDrivers,
  createDriver
} = require('../controllers/driversController');

router.get('/', getAllDrivers);
router.get('/:idDriver', getDriverById);
router.get('/name', searchDrivers);
router.post('/', createDriver);

module.exports = router;
