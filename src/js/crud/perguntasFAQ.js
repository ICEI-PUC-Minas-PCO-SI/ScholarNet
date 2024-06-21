const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const FAQ = sequelize.define("FAQ", {
  FAQID: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
  },
  Pergunta: {
    type: DataTypes.STRING,
  },
  Resposta: {
    type: DataTypes.STRING,
  },
  Comentario: {
    type: DataTypes.STRING,
  },
  CpfUser: {
    type: DataTypes.STRING,
  }
},
{
  tableName: 'FAQ',
  timestamps: false
});

module.exports = FAQ;
