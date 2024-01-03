// models/Team.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Team extends Model {}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Name required',
      },
    },
  },
}, {
  sequelize,
  modelName: 'Team',
  timestamps: false,
});

module.exports = Team;
