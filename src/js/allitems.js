const connection = require("./connection");

const allAluno = async () => {
  const [query] = await connection.execute("SELECT * FROM schoolarnet.aluno");
  return query;
};
const allEducador = async () => {
  const [query] = await connection.execute(
    "select * from schoolarnet.profissionaleducador"
  );
  return query;
};

module.exports = { allAluno, allEducador };
