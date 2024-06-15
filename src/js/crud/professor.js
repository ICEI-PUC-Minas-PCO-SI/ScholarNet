const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Professor = sequelize.define("ProfissionalEducador", {
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  Senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Formacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Linkedin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Facebook: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Twitter: {
    type: DataTypes.STRING,
    allowNull: true,
  }

},
  {
    tableName: 'ProfissionalEducador',
    timestamps: false
  });

module.exports = Professor;