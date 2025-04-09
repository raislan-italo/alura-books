let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
   const res = await fetch(endPointDaAPI);
   livros = await res.json();
   console.table(livros);
   exibirOsLivroNaTela(livros);
}
getBuscarLivrosDaAPI();

function exibirOsLivroNaTela(listaDeLivros) {
   listaDeLivros.forEach(livro => {
      const livroDiv = `
         <div class="livro">
         <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
         <h2 class="livro__titulo">
            ${livro.titulo}
         </h2>
         <p class="livro__descricao">${livro.autor}</p>
         <p class="livro__preco" id="preco">R$${livro.preco}</p>
         <div class="tags">
         <span class="tag">${livro.categoria}</span>
         </div>
         </div>
      `;
      elementoInserirLivros.innerHTML += livroDiv;
   });
}