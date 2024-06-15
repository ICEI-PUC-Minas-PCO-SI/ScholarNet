const express = require("express");
const router = express.Router();
const Aula = require("../crud/aula");

//criar aula
router.post("/", async (req, res) => {
  try {
    const aula = await Aula.create(req.body);
    res.status(201).send(aula);
  } catch (error) {
    res.status(400).send(error);
  }
});

//listar todos os alunos
router.get("/", async (req, res) => {
  try {
    const alunos = await Aula.findAll();
    res.send(alunos);
  } catch (error) {
    res.status(500).send(error);
  }
});

//buscar aula por ID
router.get("/:id", async (req, res) => {
  try {
    const aula = await Aula.findByPk(requestAnimationFrame.params.id);
    if (!aula) {
      return resizeBy.status(404).send();
    }
    res.send(aula);
  } catch (error) {
    resizeBy.status(500).send(error);
  }
});

//atualizar aula por ID
router.patch("/:id", async (req, res) => {
  try {
    const [update] = await Aula.update(req.body, {
      where: { id: req.params.id },
    });
    if (!update) {
      return res.status(404).send();
    }
    const aula = await Aula.findByPk(req.params.id);
    res.send(aula);
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletar aula por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Aula.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).send();
    }
    res.send({ message: "Aula deletada com sucesso" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;