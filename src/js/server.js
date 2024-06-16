const express = require("express");
const cors = require("cors");

const {
  getAllAluno,
  createAluno,
  updateAluno,
  deleteAluno,

  getAllEducador,
  createEducador,
  updateEducador,
  deleteEducador,
  
  getAllCursos,
  createCursos,
  updateCursos,
  deleteCursos,

  getAllAula,
  createAula,
  updateAula,
  deleteAula,

  getAllFAQ,
  createFAQ,

  getAllComentariosAula,
  createComentariosAula,
  updateComentariosAula,
  deleteComentariosAula,
} = require("./allitems");

const app = express();
const PORT = 3009;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Funcionando na porta ${PORT}`);
});

// CRUD ALUNO
app.get("/alunoData", async (req, res) => {
  try {
    const alunoData = await getAllAluno();
    return res.status(200).json(alunoData);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/post/alunoData", async (req, res) => {
  try {
    const { cpfAluno, nomeAluno, email, senha, telefone, matricula } = req.body;
    await createAluno(cpfAluno, nomeAluno, email, senha, telefone, matricula);
    res.status(201).json({ message: "Aluno criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.patch("/update/alunoData/:cpfAluno", async (req, res) => {
  try {
    const cpfAluno = req.params.cpfAluno;
    const { nomeAluno, email, senha, telefone, matricula } = req.body;
    await updateAluno(cpfAluno, nomeAluno, email, senha, telefone, matricula);
    res.status(200).json({ message: "Aluno atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/delete/alunoData/:cpfAluno", async (req, res) => {
  try {
    const cpfAluno = req.params.cpfAluno;
    await deleteAluno(cpfAluno);
    res.status(200).json({ message: "Aluno deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD EDUCADOR
app.get("/educadorData", async (req, res) => {
  try {
    const educadorData = await getAllEducador();
    return res.status(200).json(educadorData);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/post/educadorData", async (req, res) => {
  try {
    const { cpfEducador, nomeEducador, email, senha, telefone, matricula } = req.body;
    await createEducador(cpfEducador, nomeEducador, email, senha, telefone, matricula);
    res.status(201).json({ message: "Educador criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.patch("/update/educadorData/:cpfEducador", async (req, res) => {
  try {
    const cpfEducador = req.params.cpfEducador;
    const { nomeEducador, email, senha, telefone, matricula } = req.body;
    await updateEducador(cpfEducador, nomeEducador, email, senha, telefone, matricula);
    res.status(200).json({ message: "Educador atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/delete/educadorData/:cpfEducador", async (req, res) => {
  try {
    const cpfEducador = req.params.cpfEducador;
    await deleteEducador(cpfEducador);
    res.status(200).json({ message: "Educador deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD CURSO
app.get("/cursoData", async (req, res) => {
  try {
    const cursoData = await getAllCursos();
    return res.status(200).json(cursoData);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/post/cursoData", async (req, res) => {
  try {
    const {NomeCurso, Descricao, MaterialEstudo, AreaConhecimento, CargaHoraria, Video} = req.body;
    await createCursos(
      NomeCurso,
      Descricao,
      MaterialEstudo,
      AreaConhecimento,
      CargaHoraria,
      Video
    );
    res.status(201).json({ message: "Curso criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.patch("/update/cursoData/:CursoID", async (req, res) => {
  try {
    const id = req.params.CursoID;
    const { NomeCurso, Descricao, MaterialEstudo, AreaConhecimento, CargaHoraria, Video} = req.body;
    await updateCursos(
      id,
      NomeCurso,
      Descricao,
      MaterialEstudo,
      AreaConhecimento,
      CargaHoraria,
      Video
    );
    res.status(200).json({ message: "Curso atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/delete/cursoData/:CursoID", async (req, res) => {
  try {
    const id = req.params.CursoID;
    await deleteCursos(id);
    res.status(200).json({ message: "Curso deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD AULA
app.get("/aulaData", async (req, res) => {
  try {
    const aulaData = await getAllAula();
    return res.status(200).json(aulaData);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/post/aulaData", async (req, res) => {
  try {
    const { AulaID, Materia, Modulo, Descricao } = req.body;
    await createAula(
      AulaID,
      Materia,
      Modulo,
      Descricao
    );
    res.status(201).json({ message: "Aula criada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.patch("/update/aulaData/:AulaID", async (req, res) => {
  try {
    const id = req.params.AulaID;
    const { Materia, Modulo, Descricao } = req.body;
    await updateAula(
      id,
      Materia,
      Modulo,
      Descricao
    );
    res.status(200).json({ message: "Aula atualizada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/delete/aulaData/:AulaID", async (req, res) => {
  try {
    const id = req.params.AulaID;
    await deleteAula(id);
    res.status(200).json({ message: "Aula deletada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD FAQ
app.get("/faqData", async (req, res) => {
  try {
    const faqData = await getAllFAQ();
    return res.status(200).json(faqData);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/post/faqData", async (req, res) => {
  try {
    const { pergunta, resposta } = req.body;
    await createFAQ(pergunta, resposta);
    res.status(201).json({ message: "FAQ criada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.patch("/update/faqData/:FAQID", async (req, res) => {
  try {
    const id = req.params.FAQID;
    const { pergunta, resposta } = req.body;
    await updateFAQ(id, pergunta, resposta);
    res.status(200).json({ message: "FAQ atualizada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/delete/faqData/:FAQID", async (req, res) => {
  try {
    const id = req.params.FAQID;
    await deleteFAQ(id);
    res.status(200).json({ message: "FAQ deletada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// CRUD COMENTÁRIOS DA AULA
app.get("/comentariosAulaData", async (req, res) => {
  try {
    const comentariosAulaData = await getAllComentariosAula();
    return res.status(200).json(comentariosAulaData);
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/post/comentariosAulaData", async (req, res) => {
  try {
    const { AulaID, AlunoCPF, Conteudo } = req.body;
    await createComentariosAula(AulaID, AlunoCPF, Conteudo);
    res.status(201).json({ message: "Comentário da aula criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.patch("/update/comentariosAulaData/:ComentarioID", async (req, res) => {
  try {
    const id = req.params.ComentarioID;
    const { AulaID, comentario } = req.body;
    await updateComentariosAula(id, AulaID, comentario);
    res.status(200).json({ message: "Comentário da aula atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/delete/comentariosAulaData/:ComentarioID", async (req, res) => {
  try {
    const id = req.params.ComentarioID;
    await deleteComentariosAula(id);
    res.status(200).json({ message: "Comentário da aula deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = app;

