const connection = require("./connection");

const allAluno = async () => {
  const [query] = await connection.execute("SELECT * FROM scholarnet.aluno");
  return query;
};
const allEducador = async () => {
  const [query] = await connection.execute(
    "select * from scholarnet.profissionaleducador"
  );
  return query;
};
const allInstituicao = async () => {
  const [query] = await connection.execute(
    "SELECT * FROM scholarnet.instituicaoensino;"
  );
  return query;
};
const allCurso = async () => {
  const [query] = await connection.execute("SELECT * FROM scholarnet.curso;");
  return query;
};

const allAula = async () => {
  const [query] = await connection.execute("SELECT * FROM scholarnet.aula;");
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
