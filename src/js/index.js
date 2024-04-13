//RESPONSIVIDADE - criando elementos no carrosel com base na largura da tela


function carroselElements(){

    var larguraTela = window.innerWidth;
    var carrosel = document.getElementById("carrosel-items")

    carrosel.innerHTML = '';
    
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
        larguraTela = 1;
    }

    for(let i = 0; i<3; i++){
        
        var slides = document.createElement('div');
        slides.classList.add('d-flex', 'gap-2', 'container-fluid', 'justify-content-center');
        slides.id = 'slide'
        carrosel.appendChild(slides)

        var slideArea = document.getElementById('slide')

        for(let j = 0; j<qtdElementos; j++){
            var  slidesItems = document.createElement('img')
            slidesItems.classList.add('d-block','img-fluid')
            slideArea.appendChild(slidesItems)
        }

    }

}

window.onload = carroselElements
window.onresize = carroselElements

{/* <div class="carousel-item active">
          <div class="d-flex gap-2 container-fluid justify-content-center">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex gap-2 container-fluid justify-content-center">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex gap-2 container-fluid justify-content-center">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
            <img src="./imgs/black.png" class="d-block img-fluid" alt="...">
          </div>
        </div> */}
