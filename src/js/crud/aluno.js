const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Aluno = sequelize.define(
  "Aluno",
  {
    CPF: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
    },
    Nome: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    Senha: {
      type: DataTypes.STRING,
    },
    Telefone: {
      type: DataTypes.STRING,
    },
    DtNascimento: {
      type: DataTypes.STRING,
    },
    Localizacao: {
      type: DataTypes.STRING,
    },
    Descricao: {
      type: DataTypes.STRING,
    },
    Foto: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "Aluno",
    timestamps: false,
  }
);

module.exports = Aluno;
