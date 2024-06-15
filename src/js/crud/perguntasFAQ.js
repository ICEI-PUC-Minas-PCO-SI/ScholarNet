const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const FAQ = sequelize.define("FAQ", {
  FAQID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  Pergunta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Resposta: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  tableName: 'FAQ',
  timestamps: false
});

module.exports = FAQ;
