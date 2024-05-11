const express = require("express");
const { allAluno, allEducador } = require("./allitems");

const app = express();
app.use(express.json());

const PORT = 3009;

app.listen(PORT, () => {
  console.log(`Funcionando na porta ${PORT}`);
});
let alunoData;
let educadorData;

app.get("/", async (req, res) => {
  try {
    // Chama a função allItems para buscar todos os itens do banco de dados
    alunoData = await allAluno();
    educadorData = await allEducador();
    return res.status(201).json({ alunoData, educadorData });
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    return res.status(500).json({ error: "Erro internoo do servidor" });
  }
});
