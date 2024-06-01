const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "viaduct.proxy.rlwy.net",
  port: 31627,
  user: "root",
  password: "VJNfLSKbVaVJLtcRYRgCDfisSgebDwwC",
  database: "railway",
});

module.exports = connection;
