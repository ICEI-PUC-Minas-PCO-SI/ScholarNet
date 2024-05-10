const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL: " + err.stack);
    return;
  }
  console.log("Conexão Bem Sucedida ao MySQL  com id:" + connection.threadId);
});
process.on;
"SIGINT",
  () => {
    connection.end();
  };
