const db = require("./connection");
const Professor = require("./crud/professor");
const Aluno = require("./crud/aluno");
const ComentariosAula = require("./crud/comentariosAula");
const Curso = require("./crud/curso");
const FAQ = require("./crud/perguntasFAQ");
const Aula = require("./crud/aula");



/* =============================================================================================================== */

// Funções CRUD para Aluno

// Busca todos os alunos
async function getAllAluno() {
  return await Aluno.findAll();
}

// Cria um novo aluno
async function createAluno(
  CPF,
  Nome,
  Email,
  Senha,
  Telefone
) {
  return await Aluno.create({
    CPF,
    Nome,
    Email,
    Senha,
    Telefone
  });
}

// Atualiza um aluno
async function updateAluno(
  CPF,
  Nome,
  Email,
  Senha,
  Telefone
) {
  const aluno = await Aluno.findByPk(id);
  if (!aluno) throw new Error("Aluno não foi encontrado");
  return await aluno.update({
    CPF,
    Nome,
    Email,
    Senha,
    Telefone
  });
}

// Deleta um aluno
async function deleteAluno(id) {
  const aluno = await Aluno.findByPk(id);
  if (!aluno) throw new Error("Aluno não foi encontrado");
  return await aluno.destroy();
}


/* =============================================================================================================== */


// Funções CRUD para Professor

// Busca todos os professores
async function getAllEducador() {
  return await Professor.findAll();
}

// Cria um novo professor
async function createEducador(
  CPF,
  Nome,
  Email,
  Senha,
  Telefone
) {
  return await Professor.create({
    CPF,
    Nome,
    Email,
    Senha,
    Telefone
  });
}

// Atualiza um professor
async function updateEducador(
  CPF,
  Nome,
  Email,
  Senha,
  Telefone
) {
  const educador = await Professor.findByPk(id);
  if (!educador) throw new Error("Professor não foi encontrado");
  return await educador.update({
    CPF,
    Nome,
    Email,
    Senha,
    Telefone
  });
}

// Deleta um professor
async function deleteEducador(id) {
  const educador = await Professor.findByPk(id);
  if (!educador) throw new Error("Professor não foi encontrado");
  return await educador.destroy();
}



/* =============================================================================================================== */

// Funções CRUD para ComentariosAula

// Busca todos os ComentariosAula
async function getAllComentariosAula() {
  return await ComentariosAula.findAll();
}

// Cria um novo Comentario 
async function createComentariosAula(
  ComentarioID,
  AulaID,
  AlunoCPF,
  Conteudo,
  DataComentario
) {
  return await ComentariosAula.create({
    ComentarioID,
    AulaID,
    AlunoCPF,
    Conteudo,
    DataComentario
  });
}

// Atualiza um Comentario
async function updateComentariosAula(
  ComentarioID,
  AulaID,
  AlunoCPF,
  Conteudo,
  DataComentario
) {
  const ComentariosAula = await ComentariosAula.findByPk(id);
  if (!ComentariosAula) throw new Error("Comentario não foi encontrado");
  return await ComentariosAula.update({
    ComentarioID,
    AulaID,
    AlunoCPF,
    Conteudo,
    DataComentario
  });
}

// Deleta um comentario
async function deleteComentariosAula(id) {
  const ComentariosAula = await ComentariosAula.findByPk(id);
  if (!ComentariosAula) throw new Error("Comentarios não foi encontrado");
  return await ComentariosAula.destroy();
}



/* =============================================================================================================== */

// Funções CRUD para Curso

// Busca todos os Curso
async function getAllCursos() {
  return await Curso.findAll();
}

// Cria um novo Curso 
async function createCursos(
  NomeCurso,
  Descricao,
  MaterialEstudo,
  AreaConhecimento,
  CargaHoraria,
  Video
) {
  return await Curso.create({
    NomeCurso,
    Descricao,
    MaterialEstudo,
    AreaConhecimento,
    CargaHoraria,
    Video
  });
}

// Atualiza um Curso
async function updateCursos(
  NomeCurso,
  Descricao,
  MaterialEstudo,
  AreaConhecimento,
  CargaHoraria,
  Video
) {
  const curso = await Curso.findByPk(id);
  if (!curso) throw new Error("Curso não foi encontrado");
  return await curso.update({
    NomeCurso,
    Descricao,
    MaterialEstudo,
    AreaConhecimento,
    CargaHoraria,
    Video
  });
}

// Deleta um Curso
async function deleteCursos(id) {
  const curso = await Curso.findByPk(id);
  if (!curso) throw new Error("Curso não foi encontrado");
  return await curso.destroy();
}

/* =============================================================================================================== */

// Funções CRUD para Aula

// Busca todos as Aulas
async function getAllAula() {
  return await Aula.findAll();
}

// Cria uma nova Aula 
async function createAula(
  AulaID,
  Materia,
  Modulo,
  Descricao
) {
  return await Aula.create({
    AulaID,
    Materia,
    Modulo,
    Descricao
  });
}

// Atualiza uma Aula
async function updateAula(
  AulaID,
  Materia,
  Modulo,
  Descricao
) {
  const aula = await Aula.findByPk(id);
  if (!aula) throw new Error("Aula não foi encontrada9");
  return await aula.update({
    AulaID,
    Materia,
    Modulo,
    Descricao
  });
}

// Deleta uma Aula
async function deleteAula(id) {
  const aula = await Aula.findByPk(id);
  if (!aula) throw new Error("Aula não foi encontrada");
  return await aula.destroy();
}


/* =============================================================================================================== */

// Funções CRUD para FAQ

// Busca todos as FAQ
async function getAllFAQ() {
  return await FAQ.findAll();
}

// Cria uma nova Aula 
async function createFAQ(
  FAQID,
  Pergunta,
  Resposta
) {
  return await FAQ.create({
    FAQID,
    Pergunta,
    Resposta
  });
}

module.exports = {
  getAllAluno,
  createAluno,   //OK
  updateAluno,
  deleteAluno,

  getAllEducador,
  createEducador,   //OK
  updateEducador,
  deleteEducador,

  getAllComentariosAula,
  createComentariosAula,   //OK
  updateComentariosAula,
  deleteComentariosAula,

  getAllCursos,
  createCursos,
  updateCursos,   //OK
  deleteCursos,

  getAllAula,
  createAula,  //OK
  updateAula,
  deleteAula,

  getAllFAQ,
  createFAQ,  //OK

};