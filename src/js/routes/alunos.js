const express = require("express");
const router = express.Router();
const Aluno = require("../crud/aluno");

//criar aluno
router.post("/", async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).send(aluno);
  } catch (error) {
    res.status(400).send(error);
  }
});

//listar todos os alunos
router.get("/", async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.send(alunos);
  } catch (error) {
    res.status(500).send(error);
  }
});

//buscar aluno por ID
router.get("/:id", async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(requestAnimationFrame.params.id);
    if (!aluno) {
      return resizeBy.status(404).send();
    }
    res.send(aluno);
  } catch (error) {
    resizeBy.status(500).send(error);
  }
});

//atualizar aluno por ID
router.patch("/:id", async (req, res) => {
  try {
    const [update] = await Aluno.update(req.body, {
      where: { id: req.params.id },
    });
    if (!update) {
      return res.status(404).send();
    }
    const aluno = await Aluno.findByPk(req.params.id);
    res.send(aluno);
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletar aluno por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Aluno.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).send();
    }
    res.send({ message: "Aluno deletado com sucesso" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;