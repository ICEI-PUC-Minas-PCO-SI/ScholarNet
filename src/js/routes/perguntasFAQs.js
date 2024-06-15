const express = require("express");
const router = express.Router();
const FAQ = require("../crud/perguntasFAQ");

//criar perguntaFAQ
router.post("/", async (req, res) => {
  try {
    const perguntaFAQ = await FAQ.create(req.body);
    res.status(201).send(perguntaFAQ);
  } catch (error) {
    res.status(400).send(error);
  }
});

//listar todos os alunos
router.get("/", async (req, res) => {
  try {
    const alunos = await FAQ.findAll();
    res.send(alunos);
  } catch (error) {
    res.status(500).send(error);
  }
});

//buscar perguntaFAQ por ID
router.get("/:id", async (req, res) => {
  try {
    const perguntaFAQ = await FAQ.findByPk(requestAnimationFrame.params.id);
    if (!perguntaFAQ) {
      return resizeBy.status(404).send();
    }
    res.send(perguntaFAQ);
  } catch (error) {
    resizeBy.status(500).send(error);
  }
});

//atualizar perguntaFAQ por ID
router.patch("/:id", async (req, res) => {
  try {
    const [update] = await FAQ.update(req.body, {
      where: { id: req.params.id },
    });
    if (!update) {
      return res.status(404).send();
    }
    const perguntaFAQ = await FAQ.findByPk(req.params.id);
    res.send(perguntaFAQ);
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletar perguntaFAQ por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await FAQ.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).send();
    }
    res.send({ message: "Pergunta deletada com sucesso" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;