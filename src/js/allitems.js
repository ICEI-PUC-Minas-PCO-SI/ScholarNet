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
const allInstituicao = async () => {
  const [query] = await connection.execute(
    "SELECT * FROM schoolarnet.instituicaoensino;"
  );
  return query;
};
const allCurso = async () => {
  const [query] = await connection.execute("SELECT * FROM schoolarnet.curso;");
  return query;
};

const allAula = async () => {
  const [query] = await connection.execute("SELECT * FROM schoolarnet.aula;");
  return query;
};

const allPostAluno = async (
  cpfAluno,
  nomeAluno,
  email,
  senha,
  telefone,
  matricula
) => {
  const [query] = await connection.execute(
    "INSERT INTO aluno (cpfAluno, nomeAluno, email, senha, telefone,matricula) VALUES (?, ?, ?, ?, ?,?)",
    [cpfAluno, nomeAluno, email, senha, telefone, matricula]
  );
  return query;
};

module.exports = {
  allAluno,
  allEducador,
  allInstituicao,
  allCurso,
  allAula,
  allPostAluno,
};
