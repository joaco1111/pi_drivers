const { DataTypes } = require('sequelize');
const sequelize = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Driver = sequelize.define('Driver', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name required'
        }
      }
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Lastname required'
        }
      }
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description required'
        }
      }
    },

    image: {
      type: DataTypes.STRING,
      defaultValue: "https://img.freepik.com/fotos-premium/hermoso-piloto-carreras-traje-carreras-ilustracion-imagenes-predisenadas-acuarela_962764-33747.jpg",
      validate: {
        isUrl: {
          msg: 'URL required'
        }
      }
    },

    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg: 'Nationality required'
        }
      }
    },

    dateofbirth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date of birth requiered'
        }
      }
    }
  }, { timestamps: false });

module.exports = Driver;