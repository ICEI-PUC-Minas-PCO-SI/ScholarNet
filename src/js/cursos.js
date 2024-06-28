document.addEventListener('DOMContentLoaded', () => {
    let cursoDados = [];
    const cursoPerPage = 9;
    let pagAtual = 1;
    let filteredCursos = [];

    function fetchCursos() {
        fetch('http://localhost:3009/cursoData', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                cursoDados = data;
                console.log(cursoDados)
                filteredCursos = cursoDados;
                displayProducts(pagAtual);
                setupPagination();
                setBarraPesquisa();
            })
            .catch((err) => {
                console.log('Ocorreu algum erro');
                console.log(err);
            });
    }

    function displayProducts(page) {
        const cursoGrid = document.getElementById('cursos-grid');
        cursoGrid.innerHTML = '';
        const start = (page - 1) * cursoPerPage;
        const end = page * cursoPerPage;
        const paginatedProducts = filteredCursos.slice(start, end);

        paginatedProducts.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'col';
            productDiv.innerHTML = `
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
                </div>`;
            cursoGrid.appendChild(productDiv);
        });
    }
    

    function setupPagination() {
        const paginacao = document.getElementById('paginacao');
        paginacao.innerHTML = '';
        const pageCount = Math.ceil(filteredCursos.length / cursoPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('div');
            pageItem.className = 'page-item';
            pageItem.innerHTML = `<span>${i}</span>`;
            if (i === pagAtual) {
                pageItem.classList.add('active');
            }
            pageItem.addEventListener('click', () => {
                pagAtual = i;
                displayProducts(pagAtual);
                setupPagination();
            });
            paginacao.appendChild(pageItem);
        }
    }

    document.getElementById('search').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        filteredCursos = cursoDados.filter(curso =>
            curso.NomeCurso.toLowerCase().includes(query) ||
            curso.MaterialEstudo.toLowerCase().includes(query) ||
            curso.AreaConhecimento.toLowerCase().includes(query) ||
            curso.CargaHoraria.toString().includes(query)
        );
        pagAtual = 1;
        displayProducts(pagAtual);
        setupPagination();
    });

    function getParametrosQuery(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function setBarraPesquisa() {
        const buttonName = getParametrosQuery("name");
        if (buttonName) {
            const searchInput = document.getElementById("search");
            searchInput.value = buttonName;
            const event = new Event('input', { bubbles: true });
            searchInput.dispatchEvent(event);  
        }
    }

    fetchCursos();
});

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