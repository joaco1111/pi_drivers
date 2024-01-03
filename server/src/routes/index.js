// const { Router } = require("express");
// const router = Router();
// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter); 
// router.use('/', Drivers);
// router.use('/', Teams);
// module.exports = router;


//-----------api/routes/index.js-----------------
const express = require('express');
const router = express.Router();
const driverRoutes = require('./drivers');
const teamRoutes = require('./teams');

router.use('/drivers', driverRoutes);
router.use('/teams', teamRoutes);

module.exports = router;
