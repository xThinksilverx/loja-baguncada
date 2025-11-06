# Ctrl+Tudo

Sistema de gerenciamento de produtos com interface moderna e responsiva.

## 📋 Descrição

Ctrl+Tudo é uma aplicação web para cadastro, edição e visualização de produtos. O sistema oferece funcionalidades de busca, ordenação e um formulário de contato integrado.

## ✨ Funcionalidades

### Gerenciamento de Produtos
- **Adicionar** novos produtos com nome e preço
- **Editar** produtos existentes
- **Excluir** produtos com confirmação
- **Buscar** produtos por nome em tempo real
- **Ordenar** produtos por:
  - Nome (A-Z ou Z-A)
  - Preço (Menor ou Maior)

### Página de Contato
- Formulário funcional com validação
- Campos: Nome, Email e Mensagem
- Feedback visual após envio

## 🎨 Design

Interface moderna com tema escuro inspirado em GitHub, incluindo:
- Paleta de cores neon (cyan) com gradientes
- Efeitos de brilho e hover interativos
- Tipografia Inter para melhor legibilidade
- Layout responsivo para diferentes dispositivos

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS
- **JavaScript (Vanilla)** - Lógica e interatividade
- **Google Fonts** - Tipografia Inter

## 📁 Estrutura do Projeto

```
Projeto/
├── index.html              # Página principal (produtos)
├── contato.html           # Página de contato
├── assets/
│   └── logo.png          # Logo da aplicação
├── css/
│   ├── reset.css         # Reset CSS básico
│   ├── app.css           # Estilos complementares
│   └── style.css         # Estilos principais
└── js/
    ├── main.js           # Lógica dos produtos
    └── utils.js          # Utilitários e contato
```

## 🔧 Como Usar

1. **Clone ou baixe** o projeto
2. **Abra** o arquivo `index.html` em um navegador moderno
3. **Navegue** entre as páginas usando o menu superior

### Gerenciar Produtos

1. Preencha o formulário "Novo Produto" no painel lateral
2. Clique em **Salvar** para adicionar
3. Use os botões **Editar** ou **Excluir** em cada produto
4. Utilize a barra de busca e filtros para encontrar produtos

### Enviar Mensagem

1. Acesse a página **Contato** no menu
2. Preencha todos os campos do formulário
3. Clique em **Enviar**

## 💾 Dados

Os produtos são armazenados em memória durante a sessão. Produtos iniciais incluídos:
- Mesa - R$ 1.200,00
- Cadeira - R$ 300,00

## 🎯 Recursos do Código

### JavaScript
- Funções modulares e reutilizáveis
- Event listeners para interatividade
- Validação de formulários
- Filtragem e ordenação dinâmica

### CSS
- Variáveis CSS para fácil customização
- Grid e Flexbox para layouts responsivos
- Transições e animações suaves
- Media queries para mobile

## 📱 Responsividade

O layout se adapta automaticamente para:
- **Desktop** (>900px) - Grid com 2 colunas
- **Tablet** (768px-900px) - Layout adaptado
- **Mobile** (<768px) - Coluna única

## 🔮 Melhorias Futuras

- Integração com backend/API real
- Persistência de dados (LocalStorage ou banco de dados)
- Upload de imagens para produtos
- Categorização de produtos
- Carrinho de compras
- Sistema de autenticação

## 📄 Licença

© Ctrl+Tudo - Todos os direitos reservados

## 👤 Autor

Desenvolvido como projeto de estudo em desenvolvimento web front-end.

---

**Nota:** Este é um projeto de demonstração. O formulário de contato requer integração com backend para funcionar completamente.
