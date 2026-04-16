import anuncios from "../../mock/data";
import "./Anuncios.css";

function Anuncios() {
  function formatarParaReal(valor: number) {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }

  return (
    <div className="container_lista_anuncios">
      <h1>Meus anúncios</h1>

      <table className="table_anuncios">
        <thead>
          <tr>
            <th>Id</th>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {anuncios.map((anuncio) => {
            return (
              <tr>
                <td>{anuncio.id}</td>
                <td>
                  <img width={30} src={anuncio.imagem} />
                </td>
                <td>{anuncio.nome}</td>
                <td>{formatarParaReal(anuncio.valor)}</td>
                <td>{anuncio.situacao}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Anuncios;
