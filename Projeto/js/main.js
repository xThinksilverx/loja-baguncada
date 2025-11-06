// Produtos iniciais
let produtos = [
  { id: 1, nome: 'Mesa', preco: 1200.00 },
  { id: 2, nome: 'Cadeira', preco: 300.00 }
];
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

// Função para renderizar produtos
function renderizarProdutos() {
  const listaProdutos = document.getElementById('lista-produtos');
  const termoBusca = document.getElementById('busca').value.toLowerCase().trim();
  const ordenacao = document.getElementById('ordenacao').value;
  
  // Filtrar produtos
  let produtosFiltrados = produtos.filter(produto => 
    produto.nome.toLowerCase().includes(termoBusca)
  );
  
  // Ordenar produtos
  produtosFiltrados.sort((a, b) => {
    switch(ordenacao) {
      case 'nome-asc':
        return a.nome.localeCompare(b.nome);
      case 'nome-desc':
        return b.nome.localeCompare(a.nome);
      case 'preco-asc':
        return a.preco - b.preco;
      case 'preco-desc':
        return b.preco - a.preco;
      default:
        return 0;
    }
  });
  
  // Limpar lista
  listaProdutos.innerHTML = '';
  
  // Verificar se há resultados
  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML = `
      <div class="sem-resultados">
        <p>Nenhum produto encontrado${termoBusca ? ' para "' + termoBusca + '"' : ''}.</p>
      </div>
    `;
    return;
  }
  
  // Renderizar produtos filtrados
  produtosFiltrados.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', produto.id);
    card.innerHTML = `
      <h3 class="title">${produto.nome}</h3>
      <p class="price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
      <div class="card-actions">
        <button class="btn-editar" onclick="editar(${produto.id})">Editar</button>
        <button class="btn-excluir" onclick="excluir(${produto.id})">Excluir</button>
      </div>
    `;
    listaProdutos.appendChild(card);
  });
}

// Função para editar produto
function editar(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;
  
  document.getElementById('nome').value = produto.nome;
  document.getElementById('preco').value = produto.preco;
  
  // Armazenar ID para atualização
  document.getElementById('novo').setAttribute('data-editando', id);
  document.querySelector('aside h2').textContent = 'Editar Produto';
  document.querySelector('form button[type="submit"]').textContent = 'Atualizar';
  
  mostrarMensagem('Produto carregado para edição', 'sucesso');
}

// Função para excluir produto
function excluir(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;
  
  if (confirm(`Excluir "${produto.nome}"?`)) {
    produtos = produtos.filter(p => p.id !== id);
    renderizarProdutos();
    mostrarMensagem('Produto excluído', 'sucesso');
  }
}

// Adicionar/Atualizar produto
document.getElementById('novo').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = e.target.nome.value.trim();
  const preco = parseFloat(e.target.preco.value);
  const editandoId = e.target.getAttribute('data-editando');
  
  if (!nome || preco <= 0) {
    mostrarMensagem('Preencha todos os campos corretamente', 'erro');
    return;
  }
  
  if (editandoId) {
    // Atualizar produto existente
    const produto = produtos.find(p => p.id === parseInt(editandoId));
    if (produto) {
      produto.nome = nome;
      produto.preco = preco;
      mostrarMensagem('Produto atualizado', 'sucesso');
    }
    e.target.removeAttribute('data-editando');
    document.querySelector('aside h2').textContent = 'Novo Produto';
    document.querySelector('form button[type="submit"]').textContent = 'Salvar';
  } else {
    // Adicionar novo produto
    produtos.push({
      id: proximoId++,
      nome: nome,
      preco: preco
    });
    mostrarMensagem('Produto adicionado', 'sucesso');
  }
  
  // Limpar formulário e renderizar
  e.target.reset();
  renderizarProdutos();
});

// Event listeners para busca e ordenação
document.getElementById('busca').addEventListener('input', renderizarProdutos);
document.getElementById('ordenacao').addEventListener('change', renderizarProdutos);

// Renderizar produtos iniciais
renderizarProdutos();