document.addEventListener("DOMContentLoaded", () => {
  
  if(getParametrosQuery("cadastro") == "sucesso"){
    alert("Cadastro realizado com sucesso")
    removeParametrosQuery("cadastro")
}





})

function logar() {
  

}



function getParametrosQuery(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);

}
function removeParametrosQuery(param) {
  const url = new URL(window.location);
  const urlParams = url.searchParams;
  
  if (urlParams.has(param)) {
    urlParams.delete(param);
    history.replaceState(null, '', url.pathname + url.search);
  }
}