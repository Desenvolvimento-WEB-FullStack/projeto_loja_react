import { Link } from "react-router";
import "./Home.css";

function Home() {
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
      <div className="">
        <div className="item_anuncio"></div>
      </div>
    </div>
  );
}

export default Home;
