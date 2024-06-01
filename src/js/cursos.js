fetch('http://localhost:3009/cursoData', {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {

            cursoDados = data.cursoData
            qtdCursos = cursoDados.length
            const cursoGrid = document.getElementById('cursos-grid')
            const paginacao = document.getElementById('paginacao')
            const cursoPerPage = 9;
            let pagAtual = 1;

            function displayProducts(page) {
                cursoGrid.innerHTML = '';
                const start = (page - 1) * cursoPerPage;
                const end = page * cursoPerPage;
                const paginatedProducts = cursoDados.slice(start, end);
                var count = 0

                paginatedProducts.forEach(product => {

                    if(pagAtual > 1){
                        count = cursoPerPage * (pagAtual - 1)
                    }

                    const productDiv = document.createElement('div');
                    productDiv.innerHTML = `
                    <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title text-primary">${cursoDados[count].NomeCurso}</h5>
                        <p class="card-text">${cursoDados[count].Descricao}</p>
                        <p class="card-text my-0"><span class="fw-bold">Material: </span>${cursoDados[count].MaterialEstudo}</p>
                        <p class="card-text my-0"><span class="fw-bold">Área: </span>${cursoDados[count].AreaConhecimento}</p>
                        <p class="card-text my-0"><span class="fw-bold">Carga Horária: </span>${cursoDados[count].CargaHoraria} horas</p>
                        <p class="card-text my-0"><span class="fw-bold">Preço: </span>${cursoDados[count].preco}</p>
                        <p class="card-text my-0"><span class="fw-bold">Localização: </span>${cursoDados[count].Localizacao}</p>
                        <p class="card-text my-0"><span class="fw-bold">Modalidade: </span>${cursoDados[count].Modalidade}</p>
                      </div>
                    </div>
                  </div>`
                    cursoGrid.appendChild(productDiv);
                    count++
                });
            }
        
            function setupPagination() {
                const prox = document.getElementById("prox")
                const prev = document.getElementById("prev")

                paginacao.innerHTML = '';
                const pageCount = Math.ceil(qtdCursos / cursoPerPage);
                
                for (let i = 1; i <= pageCount; i++) {
                    const pageItem = document.createElement('div');
                    pageItem.className = 'page-item text-white d-flex flex-row justify-content-end'

                    pageItem.innerHTML = `              

                    <p class="fw-bold m-0 p-0">${i}</p>

                        `

                    if (i === pagAtual) {
                        pageItem.className = 'page-item text-white d-flex flex-row justify-content-end active'
                    }
            
                    pageItem.addEventListener('click', () => {
                        pagAtual = i;
                        displayProducts(pagAtual);
                        setupPagination();
                    });
                    paginacao.appendChild(pageItem);
                }
            }
        
            displayProducts(pagAtual);
            setupPagination();


        })
    .catch((err)=>{
        console.log("Ocorreu algum erro")
        console.log(err)
    })
    