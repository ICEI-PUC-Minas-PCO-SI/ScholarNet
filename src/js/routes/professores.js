const express = require("express");
const {
  allProfessor,
  allPostProfessor,
  updateProfessor,
  deleteProfessor,
} = require("../allitems");

const router = express.Router();

// GET

router.get("/professorData", async (req, res) => {
  try {
    const professorData = await allProfessor();
    return res.status(200).json({ professorData });
  } catch (error) {
    console.error("Erro ao buscar itens:".error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

//POST

router.post("./post/professorData", async (req, res) => {
  try {
    const { cpfProfessor, nomeProfessor, email, senha, telefone, matricula } =
      req.body;
    await allPostProfessor(
      cpfProfessor,
      nomeProfessor,
      email,
      senha,
      telefone,
      matricula,
    );
    res.status(201).json({ message: "professor criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Métodos PUT/PATCH
router.patch("/update/professorData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { cpfProfessor, nomeProfessor, email, senha, telefone, matricula } =
      req.body;
    await updateProfessor(
      id,
      cpfProfessor,
      nomeProfessor,
      email,
      senha,
      telefone,
      matricula,
    );
    res.status(200).json({ message: "Professor atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Métodos DELETE
router.delete("/delete/professorData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteProfessor(id);
    res.status(200).json({ message: "Professor deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;