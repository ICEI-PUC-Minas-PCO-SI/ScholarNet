document.addEventListener("DOMContentLoaded", () => {
  let botaoEnviarComentario = document
    .getElementById("btnEnviar-Comentario")
    .addEventListener("click", () => {
      let cpfUser = localStorage.getItem("CPF");
      let comentario = document.getElementById("floatingTextarea2").value;
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
    Pergunta: comentario,
    Resposta: "",
    Comentario: comentario,
    CpfUser: cpf,
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
  mensagem.style.background = "green";
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
