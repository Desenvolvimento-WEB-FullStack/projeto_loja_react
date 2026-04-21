import { Link } from "react-router";
import "./Home.css";
import anuncios from "../../mock/data";

function Home() {
  function dividirValor(valor: number) {
    return (valor / 4).toFixed(2);
  }

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
      <div className="container_cards_anuncios">
        {anuncios.map((anuncio) => (
          <div className="card_home_anuncios">
            <img
              className="imagem_card_home_anuncios"
              src={anuncio.imagem}
              alt="imagem-de-bicicleta"
            />

            <div className="card_info_produto_home_anuncios">
              <h2>{anuncio.nome}</h2>
              <p>{anuncio.descricao}</p>
              <span>{anuncio.valor}</span>
              <p className="card_parcelamento_produto_home_anuncios">
                Em até 4x de {dividirValor(anuncio.valor)} sem juros
              </p>
              <a
                className="botao_telas_iniciais card_info_produto_botao"
                href={`https://wa.me/5585991811574?text=ola tenho interesse no produto ${anuncio.nome}`}
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
