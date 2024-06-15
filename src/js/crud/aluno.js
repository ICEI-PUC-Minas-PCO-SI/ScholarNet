const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Aluno = sequelize.define("Aluno", {
  cpfAluno: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  nomeAluno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  matricula: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  }
},
{
  tableName: 'Aluno',
  timestamps: false
});

module.exports = Aluno;
