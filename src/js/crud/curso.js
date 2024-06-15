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
  Preco: {
    type: DataTypes.DECIMAL,
  },
  Localizacao: {
    type: DataTypes.STRING,
  },
  Modalidade: {
    type: DataTypes.STRING,
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
