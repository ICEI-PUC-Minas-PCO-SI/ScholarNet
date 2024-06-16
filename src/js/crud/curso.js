const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Curso = sequelize.define("curso", {
  CursoID: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
  },
  NomeCurso: {
    type: DataTypes.STRING,
  },
  Descricao: {
    type: DataTypes.STRING,
  },
  MaterialEstudo: {
    type: DataTypes.STRING,
  },
  AreaConhecimento: {
    type: DataTypes.STRING,
  },
  DataInicio: {
    type: DataTypes.DATE,
  },
  DataTermino: {
    type: DataTypes.DATE,
  },
  CargaHoraria: {
    type: DataTypes.INTEGER,
  },
  Video: {
    type: DataTypes.DECIMAL,
  }
},
  {
    tableName: 'Curso',
    timestamps: true, 
    createdAt: 'DataInicio', 
    updatedAt: 'DataTermino'
  },
);

module.exports = Curso;
