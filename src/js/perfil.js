document.getElementById('edit-fotoP-btn').addEventListener('click', function() {
   // Falta adicionar a lógica para o logout do usuário
  alert('Editar perfil...');
  console.log("hum")
});

document.getElementById('sair').addEventListener('click', function() {
  // Falta adicionar a lógica para o logout do usuário
  alert('Saindo...');
});

// Obtém o ícone e o input de upload de foto
var editIcon = document.querySelector('.Icone');
var uploadPhotoInput = document.getElementById('upload-foto');

// Quando o ícone é clicado, abre o input de upload de foto
editIcon.addEventListener('click', function() {
  uploadPhotoInput.click();
});

// Quando uma nova foto é selecionada, atualiza a foto de perfil
uploadPhotoInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var newProfilePicture = e.target.result;
    document.querySelector('.Usuario-Foto').src = newProfilePicture;
  };

  reader.readAsDataURL(file);
});
