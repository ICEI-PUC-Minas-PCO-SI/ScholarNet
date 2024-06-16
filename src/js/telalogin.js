document.addEventListener("DOMContentLoaded", () => {
  
  if(getParametrosQuery("cadastro") == "sucesso"){
    alert("Cadastro realizado com sucesso")
    removeParametrosQuery("cadastro")
}





})

function logar() {

  const inputEmail = document.getElementById('inputEmail').value;
  const inputPassword = document.getElementById('inputPassword').value;

  // Requisição para obter os dados do educador
  fetch('http://localhost:3009/educadorData')
      .then(response => response.json())
      .then(educadorData => {
          const educadorCredentials = educadorData

          for (let i = 0; i < educadorCredentials.length; i++) {
              if (educadorCredentials[i].Email === inputEmail && educadorCredentials[i].Senha === inputPassword) {
                  localStorage.setItem('userType', '1'); // Educador
                  localStorage.setItem('CPF', educadorData[i].CPF);
                  window.location.href = "index.html"
                  return;
              }
          }

          // Se não encontrou no conjunto de credenciais do educador, verifica no conjunto de credenciais do aluno
          fetch('http://localhost:3009/alunoData')
              .then(response => response.json())
              .then(alunoData => {
                  const alunoCredentials = alunoData
                  for (let i = 0; i < alunoCredentials.length; i++) {
                      if (alunoCredentials[i].Email === inputEmail && alunoCredentials[i].Senha === inputPassword) {
                          localStorage.setItem('userType', '2');
                          localStorage.setItem('CPF', alunoData[i].CPF);
                          window.location.href = "index.html"
                          return;
                      }
                  }

                  // Se não encontrou no conjunto de credenciais do aluno também, exibe mensagem de credenciais inválidas
                  alert('Credenciais inválidas');
              });
      });
  }
  




function getParametrosQuery(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);

}
function removeParametrosQuery(param) {
  const url = new URL(window.location);
  const urlParams = url.searchParams;
  
  if (urlParams.has(param)) {
    urlParams.delete(param);
    history.replaceState(null, '', url.pathname + url.search);
  }
}