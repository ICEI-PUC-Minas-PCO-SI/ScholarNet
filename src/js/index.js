//RESPONSIVIDADE - criando elementos no carrosel com base na largura da tela

function carroselElements(){

    var larguraTela = window.innerWidth;
    var carrosel = document.querySelectorAll('.carousel-item')

    carrosel[0].innerHTML = '';
    carrosel[1].innerHTML = '';
    carrosel[2].innerHTML = '';
    
    var qtdElementos;

    if(larguraTela > 1200){
        qtdElementos = 4;
    }
    else if(larguraTela > 850){
        qtdElementos = 3;
    }
    else if(larguraTela >576){
        qtdElementos = 2;
    }
    else{
        qtdElementos = 1;
    }

    var contador = 0;
    carrosel.forEach((i) => {

      var divContainer = document.createElement('div');

      divContainer.classList.add('d-flex', 'gap-2', 'container-fluid', 'justify-content-center');

        for (let i = 0; i<qtdElementos; i++){

            var curso = document.createElement("div")
            curso.style.border = "1px solid black"
            curso.style.width = "fit-content"
            if(larguraTela >1200){
            curso.style.minWidth = "260px"
            }
            else if(larguraTela > 850){
                curso.style.minWidth = "240px"
            }
            else{
                curso.style.minWidth = "220px"
            }
            curso.style.height = "150px"

            divContainer.appendChild(curso)
        }
        

        carrosel[contador].appendChild(divContainer)
        contador++;
    });

}
window.onload = carroselElements
window.onresize = carroselElements

