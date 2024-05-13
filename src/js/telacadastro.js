document.addEventListener("DOMContentLoaded", () => {
  let newAluno = {
    cpfAluno: null,
    nomeAluno: null,
    email: null,
    senha: null,
    matricula: null,
    curso: null,
  };

  let bottonEnviar = document.getElementById("btn");
  bottonEnviar.addEventListener("click", () => {
    let name = document.getElementById("camp-NAME").value;
    let lastNAME = document.getElementById("camp-LASTNAME").value;
    let andress = document.querySelector("#email").value;

    let phoneNUMBER = document.getElementById("camp-TELEFONE").value;

    alert(name + lastNAME + phoneNUMBER + andress);
  });
});
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
  cpfAluno: 1234567891,
  nomeAluno: "Fulano de Tal",
  email: "fulano@example.com",
  senha: "senha123",
  telefone: 1234567891,
  matricula: "2024001",
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
