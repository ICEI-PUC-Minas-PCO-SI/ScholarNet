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
if(localStorage.getItem("userType") == 1){
    
}
else {
    isEducador.style.display = "none"
}