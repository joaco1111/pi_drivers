const Team = require('../models/Team');

async function getAllTeams(req, res) {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los equipos.' });
  }
}

module.exports = {
  getAllTeams,
};
