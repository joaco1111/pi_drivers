const Driver = require('../models/Driver');
const Team = require('../models/Team');


async function getAllDrivers(req, res) {
  try {
    const drivers = await Driver.findAll({ include: Team });
    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los conductores.' });
  }
}

async function getDriverById(req, res) {
  const { idDriver } = req.params;
  try {
    const driver = await Driver.findByPk(idDriver, { include: Team });
    if (driver) {
      res.json(driver);
    } else {
      res.status(404).json({ error: 'Conductor no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el conductor.' });
  }
}

async function searchDrivers(req, res) {
  const { name } = req.query;
  try {
    const drivers = await Driver.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } }, // Busca sin importar mayúsculas o minúsculas
      limit: 15,
      include: Team,
    });
    if (drivers.length > 0) {
      res.json(drivers);
    } else {
      res.status(404).json({ error: 'Ningún conductor encontrado con el nombre proporcionado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar conductores.' });
  }
}

async function createDriver(req, res) {
  const { name, teamIds } = req.body;
  try {
    // Verificar que los equipos existen antes de crear el conductor
    const teams = await Team.findAll({ where: { id: teamIds } });
    if (teams.length !== teamIds.length) {
      return res.status(400).json({ error: 'Uno o más equipos no existen.' });
    }

    // Crear el conductor y asociarlo a los equipos
    const newDriver = await Driver.create({ name });
    await newDriver.setTeams(teamIds);

    res.status(201).json(newDriver);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el conductor.' });
  }
}

module.exports = {
  getAllDrivers,
  getDriverById,
  searchDrivers,
  createDriver,
};
