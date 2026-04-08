import { CiUser } from "react-icons/ci";
import "./CriarConta.css";

function CriarConta() {
  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Criar Conta</h2>
        <p>Escolha seu plano e comece anunciar hoje mesmo !</p>
      </div>
      <div className="container_direita_telas_iniciais">
        <div className="container_input">
          <CiUser color="#CCC" size={20} />
          <input placeholder="User or Email" />
        </div>
      </div>
    </div>
  );
}

export default CriarConta;
