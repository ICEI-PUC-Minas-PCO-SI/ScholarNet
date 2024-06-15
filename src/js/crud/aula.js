const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Aula = sequelize.define("Aula", {
  AulaID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  Materia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Modulo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  tableName: 'Aula',
  timestamps: false, 
},);

module.exports = Aula;
