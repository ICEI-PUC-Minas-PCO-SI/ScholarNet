const { Sequelize } = require('sequelize');

const connection = new Sequelize('railway', 'root', 'VJNfLSKbVaVJLtcRYRgCDfisSgebDwwC', {
  host: 'viaduct.proxy.rlwy.net',
  port: 31627,
  dialect: 'mysql'
});

// Testando a conexão
(async () => {
  try {
    await connection.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
})();

module.exports = connection;