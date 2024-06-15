fetch('http://localhost:3009/cursoData', {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        cursoDados = data
        qtdCursos = cursoDados.length
        
        function gerarNumerosAleatorio(min, max, contador) {
            if (max - min + 1 < contador) {
                throw new Error("Intervalo pequeno demais para gerar a quantidade desejada de números.");
            }
            
            const numerosUnicos = new Set();

            while (numerosUnicos.size < contador) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                numerosUnicos.add(randomNumber);
            }
            
            return Array.from(numerosUnicos);
        }
        
        
        function carroselElements() {
            
            var larguraTela = window.innerWidth;
            var carrosel = document.querySelectorAll('.carousel-item')
            
            carrosel[0].innerHTML = '';
            carrosel[1].innerHTML = '';
            carrosel[2].innerHTML = '';
            
            var qtdElementos;
            
            if (larguraTela > 1200) {
                qtdElementos = 4;
            }
            else if (larguraTela > 850) {
                qtdElementos = 3;
            }
            else if (larguraTela > 576) {
                qtdElementos = 2;
            }
            else {
                qtdElementos = 1;
            }
            
            var contador = 0;
            carrosel.forEach((i) => {
                num = gerarNumerosAleatorio(0, qtdCursos -1, qtdCursos -1)
                
                var divContainer = document.createElement('div');
                
                divContainer.classList.add('d-flex', 'gap-2', 'container-fluid', 'justify-content-center');
                
                for (let i = 0; i < qtdElementos; i++) {

                    var curso = document.createElement("div")
                    
                    curso.style.border = "2px solid black"
                    curso.style.width = "fit-content"
                    if (larguraTela > 1200) {
                        curso.style.minWidth = "260px"
                    }
                    else if (larguraTela > 850) {
                        curso.style.minWidth = "240px"
                    }
                    else {
                        curso.style.minWidth = "220px"
                    }
                    curso.style.height = "150px"
                    curso.style.borderRadius = "20px"
                    curso.style.padding = "10px"
                    curso.className = "cursoBox x"
                    curso.name = cursoDados[num[i]].NomeCurso
                    
                    curso.innerHTML = `         
                    <h5 class="text-primary fs-6">${cursoDados[num[i]].NomeCurso}</h5>
                    <p class="m-0 p-0"><strong>Área: </strong>${cursoDados[num[i]].AreaConhecimento}</p>
                    <p class="m-0 p-0"><strong>Carga Horaria: </strong>${cursoDados[num[i]].CargaHoraria} Horas</p>
                    <p class="m-0 p-0"><strong>Preço: </strong> R$${cursoDados[num[i]].Preco}</p>
                    <p class="m-0 p-0"><strong>Modalidade: </strong>${cursoDados[num[i]].Modalidade}</p>`
                    
                    divContainer.appendChild(curso)
                }
                
                
                carrosel[contador].appendChild(divContainer)
                contador++;
            });
            
        }
        var areas = document.getElementsByClassName("x")
        window.onload = carroselElements
        window.onresize = carroselElements
        carroselElements()
        addEvento(areas)
    })
    .catch((err) => {
        console.log("Erro ao buscar dados dos cursos")
        console.log(err)
    })
    


function addEvento(areas){
    for(let i = 0; i< areas.length; i++){
        areas[i].addEventListener('click', ()=>{

            let name = areas[i].childNodes[1].name;
            if(name == undefined){
                name = areas[i].name
            }
            window.location.href = `telacurso.html?name=${name}`;

        })
    }
}
    
