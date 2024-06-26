const teste = () => {
  const localStorageCPF = localStorage.getItem("CPF");
  if (localStorageCPF != null) {
    CarregarConteudo(localStorageCPF);
  }
};
teste();
const CarregarPagina = (user) => {
  document.getElementById("name-user").textContent = user.Nome
  document.getElementById("text-Email").textContent = user.Email
  document.getElementById("text-Telefone").textContent = user.Telefone
  document.getElementById("text-local").textContent = user.Localizacao
  document.getElementById("descricao").textContent = user.Descricao
  document.getElementById("text-idade").textContent = calcularIdade(user.DtNascimento) + " anos"
  if(user.Foto){document.getElementById("ftPerfil").src = user.Foto}
};

var alterFt = document.getElementById("alterarFoto")
alterFt.addEventListener("click", alterarFoto)

function CarregarConteudo(cpf) {
  fetch(`http://localhost:3009/alunoData`)
    .then((response) => response.json())
    .then((alunoData) => {

      fetch(`http://localhost:3009/educadorData`)
        .then((response) => response.json())
        .then((educadorData) => {

          let userEncotrado;

          for (let i = 0; i < alunoData.length; i++) {
            if (alunoData[i].CPF == cpf) {
              userEncotrado = alunoData[i];

            }
            for (let i = 0; i < educadorData.length; i++) {
              if (educadorData[i].CPF == cpf) {
                userEncotrado = educadorData[i];
              }
            }

            try {
              CarregarPagina(userEncotrado);
            } catch (error) {
            }
          }
        });

    }
    )
}

var alterUser = document.getElementById("alterUser")
var userType = localStorage.getItem("userType")
var cpf = localStorage.getItem("CPF")

alterUser.addEventListener("click", ()=>{
  
  var dtNascimento = document.getElementById("dtNascimento").value
  var descricao = document.getElementById("desc").value
  var localizacao = document.getElementById("local").value
  
  var dadosAtualizados = {};
  if (dtNascimento) dadosAtualizados.DtNascimento = dtNascimento;
  if (descricao) dadosAtualizados.Descricao = descricao;
  if (localizacao) dadosAtualizados.Localizacao = localizacao;

  if (Object.keys(dadosAtualizados).length === 0) {
    console.error("Nenhum campo foi preenchido para atualização.");
    return; 
  }


  if(userType == 1){
    fetch(`http://localhost:3009/update/educadorData/${cpf}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosAtualizados)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar educador');
      }
      return response.json();
    })
    .then(data => {
      console.log('Educador atualizado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao atualizar educador:', error);
    });
  }

  
  if(userType == 2){
    fetch(`http://localhost:3009/update/alunoData/${cpf}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosAtualizados)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar aluno');
      }
      return response.json();
    })
    .then(data => {
      console.log('Aluno atualizado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao atualizar aluno:', error);
    });
  }

    window.location.reload()
})

function calcularIdade(dataNascimento) {

  let nascimento = new Date(dataNascimento);
  
  let hoje = new Date();
  
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  
  let mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
  }
  
  return idade;
}

var sair = document.getElementById("sairBtn")
sair.addEventListener("click", ()=>{
    localStorage.clear()
})

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
var excluirCurso = document.getElementById("excluirCurso-btn")
if(localStorage.getItem("userType") == 1){
    
}
else {
    isEducador.style.display = "none"
    excluirCurso.style.display = "none"
}

async function alterarFoto(){
    
  var URL = document.getElementById("URL-ftPerfil").value
  console.log(URL)
  
  var urlFoto = {};
  if (URL) urlFoto.Foto = URL;

  if (Object.keys(urlFoto).length === 0) {
    console.error("Nenhum campo foi preenchido para atualização.");
    return; 
  }


  if(userType == 1){
    await fetch(`http://localhost:3009/update/educadorData/${cpf}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(urlFoto)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar foto');
      }
      return response.json();
    })
    .then(data => {
      console.log('Foto atualizada com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao atualizar foto:', error);
    });
  }

  
  if(userType == 2){
    await fetch(`http://localhost:3009/update/alunoData/${cpf}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(urlFoto)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar foto');
      }
      return response.json();
    })
    .then(data => {
      console.log('Foto atualizada com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao atualizar foto:', error);
    });
  }

    window.location.reload()
}