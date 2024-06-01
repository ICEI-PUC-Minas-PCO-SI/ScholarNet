const connection = require("./connection");

const allAluno = async () => {
  const [query] = await connection.execute("SELECT * FROM railway.Aluno");
  return query;
};
const allEducador = async () => {
  const [query] = await connection.execute(
    "select * from railway.Profissionaleducador"
  );
  return query;
};
const allInstituicao = async () => {
  const [query] = await connection.execute(
    "SELECT * FROM railway.Instituicaoensino;"
  );
  return query;
};
const allCurso = async () => {
  const [query] = await connection.execute("SELECT * FROM railway.Curso;");
  return query;
};

const allAula = async () => {
  const [query] = await connection.execute("SELECT * FROM railway.Aula;");
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
