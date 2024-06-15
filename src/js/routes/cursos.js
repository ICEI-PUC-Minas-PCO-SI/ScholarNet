const express = require("express");
const router = express.Router();
const Curso = require("../crud/curso");

//criar curso
router.post("/", async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).send(curso);
  } catch (error) {
    res.status(400).send(error);
  }
});

//listar todos os alunos
router.get("/", async (req, res) => {
  try {
    const alunos = await Curso.findAll();
    res.send(alunos);
  } catch (error) {
    res.status(500).send(error);
  }
});

//buscar curso por ID
router.get("/:id", async (req, res) => {
  try {
    const curso = await Curso.findByPk(requestAnimationFrame.params.id);
    if (!curso) {
      return resizeBy.status(404).send();
    }
    res.send(curso);
  } catch (error) {
    resizeBy.status(500).send(error);
  }
});

//atualizar curso por ID
router.patch("/:id", async (req, res) => {
  try {
    const [update] = await Curso.update(req.body, {
      where: { id: req.params.id },
    });
    if (!update) {
      return res.status(404).send();
    }
    const curso = await Curso.findByPk(req.params.id);
    res.send(curso);
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletar curso por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Curso.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).send();
    }
    res.send({ message: "Comentario deletado com sucesso" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;