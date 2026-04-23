async function carregarAnuncios() {
  const resposta = await fetch("http://localhost:3000/anuncios");
  const dados = await resposta.json();
}

carregarAnuncios();
