document.addEventListener("DOMContentLoaded", () => {
  let botaoEnviar = document.getElementById("botaoEnviar");

  botaoEnviar.addEventListener("click", ConferirDados);

  async function ConferirDados() {
    try {
      let totalAlunos = await getBackDadosALunos();
      let result = conferirUser(totalAlunos);
    } catch (error) {
      alert("ERROR", error);
      throw error;
    }
  }
  async function getBackDadosALunos() {
    try {
      const response = await fetch("http://localhost:3009/alunoData", {
        method: "GET",
      });
      const data = await response.json();
      return data.alunoData;
    } catch (error) {
      console.error("ERROR 404", error);
      throw error;
    }
  }
});
function conferirUser(user) {
  let numberMatricula = document.getElementById("inputMatricula").value;
  let numberSenha = document.getElementById("inputPassword").value;
  let statusMatricula = false;
  let statusSenha = false;
  console.log(user);
  alert(numberMatricula + numberSenha);
  user.forEach((element) => {
    console.log(element.senha);
    if (element.matricula == numberMatricula) {
      statusMatricula = true;
    }
  });
  user.forEach((element) => {
    if (element.senha == numberSenha) {
      statusSenha = true;
    }
  });
  alert(statusMatricula + " " + statusSenha);
  if (statusMatricula == true && statusSenha == true) {
    UserTrue();
  } else if (statusMatricula == true) {
    UserFalseSenha();
    alert("Senha incorreto");
  } else {
    alert("Usuario não encontrado");
  }
}

function UserTrue() {
  let effectIcon = document.querySelector(".camp-Effect");
  let effectSection = document.querySelector(".section");
  let campoMatricula = document.getElementById("inputMatricula");
  let campoSenha = document.getElementById("inputPassword");

  campoMatricula.style.border = "1.7px solid green";
  campoMatricula.style.color = "green";
  campoSenha.style.border = "1.7px solid green";
  campoSenha.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
  effectIcon.style.display = "block";
  effectSection.style["boxShadow"] = "0px 0px 10px 10px green";
  setTimeout(() => {
    campoMatricula.style.border = "none";
    campoMatricula.style.color = "";
    campoSenha.style.border = "none";
    effectSection.style.display = "none";
    effectIcon.style.display = "";
    effectSection.style["boxShadow"] = "";
    window.location.href = "../index.html";
  }, 4000);
}
function UserFalseSenha() {
  let campoSenha = document.getElementById("inputPassword");

  campoSenha.style.border = "1.7px solid red";
  campoSenha.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
  setTimeout(() => {
    campoSenha.style.border = "none";
    campoSenha.style.backgroundColor = "";
  }, 4000);
}
