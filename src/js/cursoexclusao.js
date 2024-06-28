document.addEventListener("DOMContentLoaded", () => {
  let cursoDados = [];
  const cursoPerPage = 9;
  let pagAtual = 1;
  let filteredCursos = [];

  function fetchCursos() {
    fetch("http://localhost:3009/cursoData", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        cursoDados = data;
        console.log(cursoDados);
        filteredCursos = cursoDados;
        displayProducts(pagAtual);
        setupPagination();
      })
      .catch((err) => {
        console.log("Ocorreu algum erro");
        console.log(err);
      });
  }

  function displayProducts(page) {
    const cursoGrid = document.getElementById("cursos-grid");
    cursoGrid.innerHTML = "";
    const start = (page - 1) * cursoPerPage;
    const end = page * cursoPerPage;
    const paginatedProducts = filteredCursos.slice(start, end);
    let cpfUser = localStorage.getItem("CPF");
    let divContaine = document.querySelector(".bloco-Container");
    divContaine.style.display = "block";
    paginatedProducts.forEach((product) => {
      console.log(product);
      const productDiv = document.createElement(`div`);
      productDiv.className = `col`;
      if (product.CpfUser == cpfUser) {
        divContaine.style.display = "none";
        productDiv.innerHTML = `
              <div class='cardMaster'>
                <div class="card">
                  <a target="_blank" href="${product.Video}">
                  <div class="card-body">
                      <h5 class="card-title text-primary">${product.NomeCurso}</h5>
                      <p class="card-text">${product.Descricao}</p>
                      <p class="card-text my-0"><span class="fw-bold">Material: </span>${product.MaterialEstudo}</p>
                      <p class="card-text my-0"><span class="fw-bold">Área: </span>${product.AreaConhecimento}</p>
                      <p class="card-text my-0"><span class="fw-bold">Carga Horária: </span>${product.CargaHoraria} horas</p>
                  </div>
                  </a>
                </div>
                <button class='cursoExcluir-${product.CursoID} text-white' >Excluir</button>
                <button class='cursoEditar-${product.CursoID} text-white' type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" id="editar-curso" cursoid="${product.CursoID}">Editar</button>
              </div>`;
      } else {
        divContaine.style.display = "block";
      }

      cursoGrid.appendChild(productDiv);
      const elementos = document.querySelectorAll('[class^="cursoExcluir-"]');
      elementos.forEach((elemento) => {
        elemento.addEventListener("click", excluirCurso);
      });
    });
  }
  function excluirCurso(event) {
    const elemento = event.target;

    const idExcluir = elemento.className.match(/cursoExcluir-(\d+)/)[1];
    alert("Teste " + idExcluir);
    const div = document.querySelector(`.col${idExcluir}`);
    console.log(div);
    fetch(`http://localhost:3009/delete/cursoData/${idExcluir}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao deletar o curso");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Curso deletador com sucesso", data);
      })
      .catch((error) => {
        console.log("Erro", error.message);
      });
    div.remove();
  }

  function setupPagination() {
    const paginacao = document.getElementById("paginacao");
    paginacao.innerHTML = "";
    const pageCount = Math.ceil(filteredCursos.length / cursoPerPage);

    for (let i = 1; i <= pageCount; i++) {
      const pageItem = document.createElement("div");
      pageItem.className = "page-item";
      pageItem.innerHTML = `<span>${i}</span>`;
      if (i === pagAtual) {
        pageItem.classList.add("active");
      }
      pageItem.addEventListener("click", () => {
        pagAtual = i;
        displayProducts(pagAtual);
        setupPagination();
      });
      paginacao.appendChild(pageItem);
    }
  }

  function getParametrosQuery(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  fetchCursos();
});

var perfilBtn = document.getElementById("perfil-btn")
var islogged = document.getElementById("userLogado")
if (localStorage.getItem("CPF")) {
  islogged.textContent = "Sair"
  islogged.addEventListener("click", () => {
    window.location.href = "telalogin.html"
    localStorage.clear()
  })

}
else if (!localStorage.getItem("CPF")) {
  islogged.textContent = "Login/Registrar"
  perfilBtn.style.display = "none"
}

var isEducador = document.getElementById("publicar-btn")
if (localStorage.getItem("userType") == 1) {

}
else {
  isEducador.style.display = "none"
}



var salvarBtn = document.getElementById("salvar").addEventListener("click", ()=>{

  var titulo = document.getElementById("titulo-curso").value
  var desc = document.getElementById("desc-curso").value
  var carga = document.getElementById("carga-curso").value
  var material = document.getElementById("material-curso").value
  var editar = document.getElementById("editar-curso")
  var IdCurso = editar.getAttribute("cursoid")

  var dadosAtualizados = {};
  if (titulo) dadosAtualizados.NomeCurso = titulo;
  if (desc) dadosAtualizados.Descricao = desc;
  if (material) dadosAtualizados.MaterialEstudo = material;
  if (carga) dadosAtualizados.CargaHoraria = carga;

  if (Object.keys(dadosAtualizados).length === 0) {
    console.error("Nenhum campo foi preenchido para atualização.");
    return; 
  }

  fetch(`http://localhost:3009/update/cursoData/${IdCurso}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao atualizar curso');
    }
    return response.json();
  })
  .then(data => {
    console.log('Curso atualizado com sucesso:', data);
    alert("Curso Atualizado com Sucesso")
    window.location.href = "perfil.html"
  })
  .catch(error => {
    console.error('Erro ao atualizar curso:', error);
  });
})
