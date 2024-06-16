fetch("http://localhost:3009/alunoData", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao fazer a solicitação:", error);
  });



function cadastrarAluno() {

  const nome = document.getElementById('inputNome').value.trim();
  const cpf = document.getElementById('inputCPF').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const telefone = document.getElementById('inputTel').value.trim();
  const senha = document.getElementById('inputPassword').value.trim();

  fetch('http://localhost:3009/alunoData')
    .then(response => response.json())
    .then(data => {
      // Verifica se o CPF já existe
      const cpfExiste = data.some(aluno => aluno.CPF === cpf);
      if (cpfExiste) {
        alert('Já existe uma conta cadastrada com esses dados');
        return;
      }
        var alunoDados = {
        CPF: cpf,
        Nome: nome,
        Email: email,
        Senha: senha,
        Telefone: telefone
      };
      fetch('http://localhost:3009/post/alunoData', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alunoDados)
      })
      .then(response => response.json())
      .then(data => {
          console.log(alunoDados)
          console.log('Aluno cadastrado com sucesso:', data);
          window.location.href = "telalogin.html?cadastro=sucesso";
        })
        .catch(error => console.error('Erro ao cadastrar aluno:', error));
    })
    .catch(error => console.error('Erro ao verificar CPF:', error));
}

function cadastrarEducador() {

  const nome = document.getElementById('inputNome1').value.trim();
  const cpf = document.getElementById('inputCPF1').value.trim();
  const email = document.getElementById('inputEmail1').value.trim();
  const telefone = document.getElementById('inputTel1').value.trim();
  const senha = document.getElementById('inputPassword1').value.trim();

  fetch('http://localhost:3009/educadorData')
    .then(response => response.json())
    .then(data => {
      // Verifica se o CPF já existe
      const cpfExiste = data.some(educador => educador.CPF === cpf);
      if (cpfExiste) {
        alert('Já existe uma conta cadastrada com esses dados');
        return;
      }
        var educadorDados = {
        CPF: cpf,
        Nome: nome,
        Email: email,
        Senha: senha,
        Telefone: telefone
      };
      fetch('http://localhost:3009/post/educadorData', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(educadorDados)
      })
      .then(response => response.json())
      .then(data => {
          console.log(educadorDados)
          console.log('Educador cadastrado com sucesso:', data);
          window.location.href = "telalogin.html?cadastro=sucesso";
        })
        .catch(error => console.error('Erro ao cadastrar aluno:', error));
    })
    .catch(error => console.error('Erro ao verificar CPF:', error));
}

  //validar cadastro 

  document.getElementById('cadastroAluno').addEventListener('click', () => {

    var ifError = document.getElementById("error")
    var ifErrorSenha = document.getElementById("error-senha")
    const nome = document.getElementById('inputNome').value.trim();
    const cpf = document.getElementById('inputCPF').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const telefone = document.getElementById('inputTel').value.trim();
    const senha = document.getElementById('inputPassword').value.trim();
    const confirmarSenha = document.getElementById('inputConfPassword').value.trim();

    if (!nome) {
      ifError.style.display = "block"
      document.getElementById("error-email").style.display = "none"
      document.getElementById('inputNome').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!cpf) {
      ifError.style.display = "block"
      document.getElementById("error-email").style.display = "none"
      document.getElementById('inputCPF').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!email) {
      ifError.style.display = "block"
      document.getElementById("error-email").style.display = "none"
      document.getElementById('inputEmail').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!telefone) {
      ifError.style.display = "block"
      document.getElementById("error-email").style.display = "none"
      document.getElementById('inputTel').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!senha) {
      ifError.style.display = "block"
      ifErrorSenha.style.display = "none"
      document.getElementById("error-email").style.display = "none"
      document.getElementById('inputPassword').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (senha !== confirmarSenha) {
      ifErrorSenha.style.display = "block"
      ifError.style.display = "none"
      document.getElementById("error-email").style.display = "none"
      document.getElementById('inputConfPassword').focus()
      setTimeout(() => { ifErrorSenha.style.display = "none" }, 3000)
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o formulário
  })


  document.getElementById('cadastroEducador').addEventListener('click', () => {

    var ifError = document.getElementById("error2")
    var ifErrorSenha = document.getElementById("error-senha2")
    const nome = document.getElementById('inputNome1').value.trim();
    const cpf = document.getElementById('inputCPF1').value.trim();
    const email = document.getElementById('inputEmail1').value.trim();
    const telefone = document.getElementById('inputTel1').value.trim();
    const senha = document.getElementById('inputPassword1').value.trim();
    const confirmarSenha = document.getElementById('inputConfPassword1').value.trim();

    if (!nome) {
      ifError.style.display = "block"
      document.getElementById("error-email2").style.display = "none"
      document.getElementById('inputNome1').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!cpf) {
      ifError.style.display = "block"
      document.getElementById("error-email2").style.display = "none"
      document.getElementById('inputCPF1').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!email) {
      ifError.style.display = "block"
      document.getElementById("error-email2").style.display = "none"
      document.getElementById('inputEmail1').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!telefone) {
      ifError.style.display = "block"
      document.getElementById("error-email2").style.display = "none"
      document.getElementById('inputTel1').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (!senha) {
      ifError.style.display = "block"
      ifErrorSenha.style.display = "none"
      document.getElementById("error-email2").style.display = "none"
      document.getElementById('inputPassword1').focus()
      setTimeout(() => { ifError.style.display = "none" }, 3000)
      return;
    }
    if (senha !== confirmarSenha) {
      ifErrorSenha.style.display = "block"
      ifError.style.display = "none"
      document.getElementById("error-email2").style.display = "none"
      document.getElementById('inputConfPassword1').focus()
      setTimeout(() => { ifErrorSenha.style.display = "none" }, 3000)
      return;
    }
    // Aqui você pode adicionar a lógica para enviar o formulário
  })

  // mascara de input
  const nomeInput = document.getElementById('inputNome');
  const cpfInput = document.getElementById('inputCPF');
  const telInput = document.getElementById('inputTel');
  const emailInput = document.getElementById('inputEmail');
  const emailError = document.getElementById('emailError');

  nomeInput.addEventListener('input', function () {
    nomeInput.value = nomeInput.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚãõÃÕâêîôûÂÊÎÔÛçÇ\s]/g, '');
  });

  cpfInput.addEventListener('input', function () {
    let value = cpfInput.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput.value = value;
  });

  telInput.addEventListener('input', function () {
    let value = telInput.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    telInput.value = value;
  })

  emailInput.addEventListener('blur', function () {
    if (!emailInput.value.includes('@')) {
      emailInput.style.border = "1px solid red"
      document.getElementById("error-email").style.display = "block"
      setTimeout(() => {
        document.getElementById("error-email").style.display = "none";
        emailInput.style.border = "1px solid rgb(255, 255, 255)"
      }, 3000)
    }
  });

  const nomeInput1 = document.getElementById('inputNome1');
  const cpfInput1 = document.getElementById('inputCPF1');
  const telInput1 = document.getElementById('inputTel1');
  const emailInput1 = document.getElementById('inputEmail1');
  const emailError1 = document.getElementById('emailError1');

  nomeInput1.addEventListener('input', function () {
    nomeInput1.value = nomeInput1.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚãõÃÕâêîôûÂÊÎÔÛçÇ\s]/g, '');
  });

  cpfInput1.addEventListener('input', function () {
    let value = cpfInput1.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput1.value = value;
  });

  telInput1.addEventListener('input', function () {
    let value = telInput1.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    telInput1.value = value;
  })

  emailInput1.addEventListener('blur', function () {
    if (!emailInput1.value.includes('@')) {
      emailInput1.style.border = "1px solid red"
      document.getElementById("error-email2").style.display = "block"
      setTimeout(() => {
        document.getElementById("error-email2").style.display = "none";
        emailInput1.style.border = "1px solid rgb(255, 255, 255)"
      }, 3000)
    }
  });

  //Switch de cadastros

  var btnToAluno = document.getElementById("educadorToAluno");
  var btnToEducador = document.getElementById("alunoToEducador");

  var aluno = document.getElementById("aluno");
  var educador = document.getElementById("educador");

  btnToEducador.addEventListener('click', function () {
    educador.className = "d-flex flex-column justify-content-center align-items-center"
    aluno.className = "d-none flex-column justify-content-center align-items-center"
  })

  btnToAluno.addEventListener('click', function () {
    aluno.className = "d-flex flex-column justify-content-center align-items-center"
    educador.className = "d-none flex-column justify-content-center align-items-center"
  })
