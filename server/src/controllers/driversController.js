// controllers/driversController.js
const { Driver } = require('../models/Driver');

// Obtener todos los conductores
const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    const driversWithDefaultImage = drivers.map((driver) => ({
      ...driver.dataValues,
      image: driver.image || { url: 'URL_POR_DEFECTO' }, // Coloca la URL por defecto que desees
    }));
    res.json(driversWithDefaultImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

// Obtener detalles de un conductor por ID
const getDriverById = async (req, res) => {
  const { idDriver } = req.params;

  try {
    const driver = await Driver.findByPk(idDriver);
    if (driver) {
      const driverWithDefaultImage = {
        ...driver.dataValues,
        image: driver.image || { url: 'URL_POR_DEFECTO' }, // Coloca la URL por defecto que desees
      };
      res.json(driverWithDefaultImage);
    } else {
      res.status(404).send('Conductor no encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

// Buscar conductores por nombre
const searchDrivers = async (req, res) => {
  const { name } = req.query;

  try {
    const drivers = await Driver.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    const driversWithDefaultImage = drivers.map((driver) => ({
      ...driver.dataValues,
      image: driver.image || { url: 'URL_POR_DEFECTO' }, // Coloca la URL por defecto que desees
    }));
    res.json(driversWithDefaultImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear un nuevo conductor
const createDriver = async (req, res) => {
  const { name, dob, nationality, teams } = req.body;

  try {
    const newDriver = await Driver.create({
      name,
      dob,
      nationality,
      teams,
    });
    res.status(201).json(newDriver);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = {
  getAllDrivers,
  getDriverById,
  searchDrivers,
  createDriver,
};
