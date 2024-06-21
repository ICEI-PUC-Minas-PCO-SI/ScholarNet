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
}