/*Metodo GET para receber dados do Aluno */
fetch("http://localhost:3009/alunoData", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao fazer a solicitação:", error);
  });

const alunoData = {
  cpfAluno: 1002200001,
  nomeAluno: "Fulano de Tal",
  email: "fulano@example.com",
  senha: "senha123",
  telefone: 123456789,
  matricula: 2024001,
};
/*Metodo POST para criar um novo usuaro/Aluno */
fetch("http://localhost:3009/post/alunoData", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(alunoData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao criar usuário");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.message); // Aqui você pode fazer algo com a mensagem recebida
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
