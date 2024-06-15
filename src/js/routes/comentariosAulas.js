const express = require("express");
const router = express.Router();
const ComentariosAula = require("../crud/comentariosAula");

//criar comentario
router.post("/", async (req, res) => {
  try {
    const comentario = await ComentariosAula.create(req.body);
    res.status(201).send(comentario);
  } catch (error) {
    res.status(400).send(error);
  }
});

//listar todos os alunos
router.get("/", async (req, res) => {
  try {
    const alunos = await ComentariosAula.findAll();
    res.send(alunos);
  } catch (error) {
    res.status(500).send(error);
  }
});

//buscar comentario por ID
router.get("/:id", async (req, res) => {
  try {
    const comentario = await ComentariosAula.findByPk(requestAnimationFrame.params.id);
    if (!comentario) {
      return resizeBy.status(404).send();
    }
    res.send(comentario);
  } catch (error) {
    resizeBy.status(500).send(error);
  }
});

//atualizar comentario por ID
router.patch("/:id", async (req, res) => {
  try {
    const [update] = await ComentariosAula.update(req.body, {
      where: { id: req.params.id },
    });
    if (!update) {
      return res.status(404).send();
    }
    const comentario = await ComentariosAula.findByPk(req.params.id);
    res.send(comentario);
  } catch (error) {
    res.status(400).send(error);
  }
});

//deletar comentario por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await ComentariosAula.destroy({
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