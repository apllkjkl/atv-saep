// Abrir o modal de login
document.getElementById('loginBtn').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = 'block';
});

// Fechar o modal de login
document.getElementById('cancelBtn').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = 'none';
});

// Login validation
document.getElementById('loginSubmitBtn').addEventListener('click', function() {
  const nickname = document.getElementById('nickname').value;
  const password = document.getElementById('password').value;

  if (nickname === 'user' && password === '1234') {
    alert('Login bem-sucedido');
    document.getElementById('loginModal').style.display = 'none';
  } else {
    alert('Credenciais incorretas!');
    highlightErrors(nickname, password);
  }
});

// Função para destacar erros de login
function highlightErrors(nickname, password) {
  const nicknameInput = document.getElementById('nickname');
  const passwordInput = document.getElementById('password');
  
  if (!nickname) {
    nicknameInput.style.border = '2px solid red';
  } else {
    nicknameInput.style.border = '';
  }

  if (!password) {
    passwordInput.style.border = '2px solid red';
  } else {
    passwordInput.style.border = '';
  }
}

// Abrir o modal da foto ao clicar
document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', function() {
    document.getElementById('photoModal').style.display = 'block';
    document.getElementById('photoName').innerText = image.alt;
    document.getElementById('photoImage').src = image.src;
    resetPhotoModal();
  });
});

// Fechar o modal da foto
document.getElementById('closePhotoModal').addEventListener('click', function() {
  document.getElementById('photoModal').style.display = 'none';
});

// Resetar conteúdo do modal da foto
function resetPhotoModal() {
  document.getElementById('likeIcon').src = 'coração.svg';
  document.getElementById('likeCount').innerText = '0';
  document.getElementById('commentCount').innerText = '0';
  document.getElementById('commentInput').value = '';
}

// Enviar comentário
document.getElementById('sendComment').addEventListener('click', function() {
  const comment = document.getElementById('commentInput').value;

  if (comment.length > 2) {
    const commentCount = document.getElementById('commentCount');
    commentCount.innerText = parseInt(commentCount.innerText) + 1;
    alert('Comentário enviado!');
    document.getElementById('commentInput').value = '';
  } else {
    alert('Não é possível enviar um comentário com menos de 2 caracteres.');
  }
});

// Curtir a foto
document.getElementById('likeIcon').addEventListener('click', function() {
  const likeCount = document.getElementById('likeCount');
  const likeIcon = document.getElementById('likeIcon');
  
  if (likeIcon.classList.contains('liked')) {
    likeCount.innerText = parseInt(likeCount.innerText) - 1;
    likeIcon.src = 'coração.svg'; // Alterar ícone de volta ao normal
    likeIcon.classList.remove('liked');
  } else {
    likeCount.innerText = parseInt(likeCount.innerText) + 1;
    likeIcon.src = 'coração-vermelho.svg'; // Ícone de curtida
    likeIcon.classList.add('liked');
  }
});
