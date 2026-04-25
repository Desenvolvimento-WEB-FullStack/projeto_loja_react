import { Link } from "react-router";
import "./Home.css";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

function Home() {
  const [anuncios, setAnuncios] = useState([]);
  const [palavra, setPalavra] = useState("");

  function dividirValor(valor: number, parcelamento: number = 1) {
    return (valor / parcelamento).toFixed(2);
  }

  async function buscarAnuncios() {
    const resposta = await fetch("http://localhost:3000/anuncios");
    const dados = await resposta.json();
    setAnuncios(dados);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    buscarAnuncios();
  }, []);

  const anunciosFiltrados = anuncios.filter(
    (anuncio) =>
      anuncio.nome.toLowerCase().includes(palavra.toLowerCase()) ||
      anuncio.preco.toString().includes(palavra),
  );

  return (
    <div className="container_home">
      <div className="header_home_anuncios">
        <div>
          <h1>Anúncios em destaque</h1>
          <p>Encontre colecionaveis, mangas e acessorios do universo anime.</p>
        </div>
        <Link to="/login">
          <button className="botao_telas_iniciais header_home_anuncios_botao">
            Quero anunciar
          </button>
        </Link>
      </div>

      <div className="container_input">
        <BiSearch color="#CCC" size={20} />
        <input
          placeholder="Pesquisa por uma palavra"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />
      </div>

      <div className="container_cards_anuncios">
        {anunciosFiltrados.map((anuncio: any) => (
          <div className="card_home_anuncios" key={anuncio.id}>
            <img
              className="imagem_card_home_anuncios"
              src={anuncio.url}
              alt="imagem-de-bicicleta"
            />

            <div className="card_info_produto_home_anuncios">
              <h2>{anuncio.nome}</h2>
              <p>{anuncio.descricao}</p>
              <span>{anuncio.preco}</span>

              {anuncio.parcelamento === "" ? (
                "so aceito a vista"
              ) : (
                <p className="card_parcelamento_produto_home_anuncios">
                  Em até {anuncio.parcelamento}x de{" "}
                  {dividirValor(anuncio.preco, anuncio.parcelamento)} sem juros
                </p>
              )}

              <a
                className="botao_telas_iniciais card_info_produto_botao"
                href={`https://wa.me/${anuncio.contato}?text=ola tenho interesse no produto ${anuncio.nome}`}
                //href={formatarMensagem(anuncio)}
                target="_blank"
              >
                Negociar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
