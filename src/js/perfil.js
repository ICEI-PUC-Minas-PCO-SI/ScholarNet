const teste = () => {
  const localStorageCPF = localStorage.getItem("CPF");
  if (localStorageCPF != null) {
    console.log(localStorageCPF);
    CarregarConteudo(localStorageCPF);
  }
};
teste();
const CarregarPagina = (user) => {
  document.getElementById("name-user").textContent = user.Nome;
  document.getElementById("text-Email").textContent = user.Email;
  document.getElementById("text-Telefone").textContent = user.Telefone;
  console.log(user.Email);
  console.log(user);
};
function CarregarConteudo(cpf) {
  fetch(`http://localhost:3009/alunoData`)
    .then((response) => response.json())
    .then((alunoData) => {
      let alunoEncotrado;
      for (let i = 0; i < alunoData.length; i++) {
        if (alunoData[i].CPF == cpf) {
          alunoEncotrado = alunoData[i];
          console.log(alunoEncotrado);
        }
      }
      try {
        CarregarPagina(alunoEncotrado);
      } catch (error) {
        console.log("Error");
      }
    });
}
