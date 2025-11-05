// Contador para novos produtos
let proximoId = 3;

// Função para mostrar mensagens
function mostrarMensagem(texto, tipo) {
  const mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.textContent = texto;
  mensagemDiv.className = tipo;
  mensagemDiv.style.display = 'block';
  
  setTimeout(() => {
    mensagemDiv.style.display = 'none';
  }, 3000);
}

// Função para editar produto
function editar(id) {
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const titulo = card.querySelector('.title').textContent;
  const precoTexto = card.querySelector('.price').textContent;
  const preco = precoTexto.replace('R$ ', '').replace('.', '').replace(',', '.');
  
  document.getElementById('nome').value = titulo;
  document.getElementById('preco').value = parseFloat(preco);
  
  mostrarMensagem('Produto carregado para edição', 'sucesso');
}

// Função para excluir produto
function excluir(id) {
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const titulo = card.querySelector('.title').textContent;
  
  if (confirm(`Excluir "${titulo}"?`)) {
    card.remove();
    mostrarMensagem('Produto excluído', 'sucesso');
  }
}

// Adicionar novo produto
document.getElementById('novo').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = e.target.nome.value.trim();
  const preco = parseFloat(e.target.preco.value);
  
  if (!nome || preco <= 0) {
    mostrarMensagem('Preencha todos os campos corretamente', 'erro');
    return;
  }
  
  // Criar novo card
  const novoCard = document.createElement('div');
  novoCard.className = 'card';
  novoCard.setAttribute('data-id', proximoId);
  novoCard.innerHTML = `
    <h3 class="title">${nome}</h3>
    <p class="price">R$ ${preco.toFixed(2).replace('.', ',')}</p>
    <div class="card-actions">
      <button class="btn-editar" onclick="editar(${proximoId})">Editar</button>
      <button class="btn-excluir" onclick="excluir(${proximoId})">Excluir</button>
    </div>
  `;
  
  document.getElementById('lista-produtos').appendChild(novoCard);
  proximoId++;
  
  // Limpar formulário
  e.target.reset();
  
  mostrarMensagem('Produto adicionado', 'sucesso');
});