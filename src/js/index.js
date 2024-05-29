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

      /*for (let i = 0; i<qtdElementos; i++){
          var img = document.createElement('img');
          img.src = './imgs/black.png';
          img.classList.add('d-block', 'img-fluid');
          img.alt = '...';
          divContainer.appendChild(img);
        }*/

        //Implementando o design dos cursos

        

        carrosel[contador].appendChild(divContainer)
        contador++;
    });

}
window.onload = carroselElements
window.onresize = carroselElements

