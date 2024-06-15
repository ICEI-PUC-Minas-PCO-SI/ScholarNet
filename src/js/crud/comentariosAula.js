const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const ComentariosAula = sequelize.define("CometariosAula", {
  ComentarioID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  AulaID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  AlunoCPF: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  Conteudo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DataComentario: {
    type: DataTypes.TIME,
    allowNull: true,
  }
},
{
  tableName: 'ComentariosAula',
  timestamps: false
},);

module.exports = ComentariosAula;
