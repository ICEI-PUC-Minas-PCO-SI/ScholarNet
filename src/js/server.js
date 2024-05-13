const express = require("express");
const {
  allAluno,
  allEducador,
  allInstituicao,
  allCurso,
  allAula,
  allPostAluno,
} = require("./allitems");
const db = require("./connection");
const cors = require("cors");
const { NOMEM } = require("dns");

const app = express();
const PORT = 3009;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Funcionando na porta ${PORT}`);
});
/*Variaveis dos Metodos Gets ------------------------------------------------*/
let alunoData;
let educadorData;
let instituicaoData;
let cursoData;
let aulaData;

let postAluno;

/*Metodos Gets --------------------------------------------------- */
app.get("/alunoData", async (req, res) => {
  try {
    // Chama a função allItems para buscar todos os itens do banco de dados
    alunoData = await allAluno();
    return res.status(201).json({ alunoData });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro internoo do servidor" });
  }
});
app.get("/educadorData", async (req, res) => {
  try {
    educadorData = await allEducador();
    return res.status(201).json({ educadorData });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro internoo do servidor" });
  }
});
app.get("/instituicaoData", async (req, res) => {
  try {
    instituicaoData = await allInstituicao();
    return res.status(201).json({ educadorData });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro internoo do servidor" });
  }
});
app.get("/cursoData", async (req, res) => {
  try {
    cursoData = await allCurso();
    return res.status(201).json({ educadorData });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro internoo do servidor" });
  }
});
app.get("/aulaData", async (req, res) => {
  try {
    aulaData = await allAula();
    return res.status(201).json({ educadorData });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro internoo do servidor" });
  }
});
/*Metodos Gets --------------------------------------------------- */
/*Metodos Posts --------------------------------------------------- */
app.post("/post/alunoData", async (req, res) => {
  try {
    const { cpfAluno, nomeAluno, email, senha, telefone, matricula } = req.body;
    await allPostAluno(cpfAluno, nomeAluno, email, senha, telefone, matricula);
    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});
/*Metodos Posts --------------------------------------------------- */
