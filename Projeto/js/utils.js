// Função para mostrar mensagens
function mostrarMensagem(texto, tipo) {
  const mensagemDiv = document.getElementById('mensagem');
  if (mensagemDiv) {
    mensagemDiv.textContent = texto;
    mensagemDiv.className = tipo;
    mensagemDiv.style.display = 'block';
    
    setTimeout(() => {
      mensagemDiv.style.display = 'none';
    }, 3000);
  }
}

// Formulário de contato
document.getElementById('fale').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem-texto').value.trim();
  
  // Validação
  if (!nome || !email || !mensagem) {
    mostrarMensagem('Preencha todos os campos', 'erro');
    return;
  }
  
  if (!email.includes('@')) {
    mostrarMensagem('Email inválido', 'erro');
    return;
  }
  
  const dados = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };
  
  // Simular envio (substitua pela sua API real)
  fetch('/send.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.text())
  .then(data => {
    mostrarMensagem('Mensagem enviada com sucesso!', 'sucesso');
    e.target.reset();
  })
  .catch(error => {
    mostrarMensagem('Erro ao enviar mensagem. Tente novamente.', 'erro');
    console.error('Erro:', error);
  });
});