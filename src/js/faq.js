document.addEventListener("DOMContentLoaded", () => {
  var botaoEnviarComentario = document.getElementById("btnEnviar-Comentario")
  botaoEnviarComentario.addEventListener("click", () => {
    let cpfUser = localStorage.getItem("CPF");
    let comentario = document.getElementById("coment").value;
    console.log(comentario);
    if (comentario !== "" && comentario != null) {
      EnviarMensagem(comentario, cpfUser);
    } else {
      redMensagem();
    }
  });
});

function EnviarMensagem(comentario, cpf) {

  let comentarioData = {
    Comentario: comentario,
    CpfUser: cpf
  };
  fetch("http://localhost:3009/post/faqData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comentarioData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(comentarioData);
      console.log("Comentario enviado com sucesso ", data);
      GreenMensagem();
    })
    .catch((error) => console.log("Error ao enviar comentario"));
}

function GreenMensagem() {
  let campoMenssagem = document.getElementById("floatingTextarea2");
  let mensagem = document.getElementById("mensagemEnvio");
  mensagem.innerHTML = "Pergunta enviada com Sucesso";
  mensagem.style.background = "#064f47";
  mensagem.style.display = "block";
  setTimeout(() => {
    campoMenssagem.value = " ";
    mensagem.style.display = "none";
  }, 4000);
}

function redMensagem() {
  let mensagem = document.getElementById("mensagemEnvio");

  mensagem.style.background = "red";
  mensagem.style.display = "block";
  mensagem.innerHTML = "Menssagem vazia!!";
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 4000);
}

var perfilBtn = document.getElementById("perfil-btn")   
var islogged = document.getElementById("userLogado")
if(localStorage.getItem("CPF")){
    islogged.textContent = "Sair"
    islogged.addEventListener("click", ()=>{
        window.location.href = "telalogin.html"
        localStorage.clear()
    })

}
else if(!localStorage.getItem("CPF")){
    islogged.textContent = "Login/Registrar"
    perfilBtn.style.display = "none"
}

var isEducador = document.getElementById("publicar-btn")
if(localStorage.getItem("userType") == 1){
    
}
else {
    isEducador.style.display = "none"
}