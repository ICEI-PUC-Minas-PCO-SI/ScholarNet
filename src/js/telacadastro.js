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
  cpfAluno: 1999999911,
  nomeAluno: "Elder Vieira Rosa",
  email: "elderluiz0@example.com",
  senha: "senha123323",
  telefone: 123456789,
  matricula: 2024041,
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




//Switch de cadastros

var btnToAluno = document.getElementById("educadorToAluno");
var btnToEducador = document.getElementById("alunoToEducador");

console.log(btnToEducador)
var aluno = document.getElementById("aluno");
var educador = document.getElementById("educador");

btnToEducador.addEventListener('click', function(){
    educador.className = "d-flex flex-column justify-content-center align-items-center"
    aluno.className = "d-none flex-column justify-content-center align-items-center"
})

btnToAluno.addEventListener('click', function(){
  aluno.className = "d-flex flex-column justify-content-center align-items-center"
  educador.className = "d-none flex-column justify-content-center align-items-center"
})

