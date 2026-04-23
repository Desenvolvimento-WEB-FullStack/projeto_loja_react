import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import Swal from "sweetalert2";

import "./CriarConta.css";
import { useNavigate } from "react-router";

function CriarConta() {
  const navegar = useNavigate();
  // variaveis de estado
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [plano, setPlano] = useState("");

  /* Funcao que dispara ao submeter o formulario
    axios.post("http://localhost:3000/auth/register", {
      name: nome,
      password: senha,
      email: email,
    });
  */

  async function cadastrar(event: React.SubmitEvent) {
    try {
      event.preventDefault();

      const resposta = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: nome,
          password: senha,
          email: email,
          plan: plano,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resposta.ok === false) {
        const dadosError = await resposta.json();

        throw new Error(dadosError.error);
      }

      Swal.fire({
        icon: "success",
        title: "Conta Criada",
        text: "Agora, você poderá fazer o login e desfrutar da plataforma",
        confirmButtonText: "Tudo certo !",
      });

      navegar("/");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      Swal.fire({
        icon: "error",
        title: "Opps !",
        text: errorMessage,
      });
    }
  }

  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Criar Conta</h2>
        <p>Escolha seu plano e comece anunciar hoje mesmo !</p>
      </div>
      <form onSubmit={cadastrar} className="container_direita_telas_iniciais">
        <h1>Cadastro</h1>

        <div className="container_input">
          <CiUser color="#CCC" size={20} />

          <input
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            } /* Funcao disparada toda vez que o usuario digita algo no campo */
          />
        </div>
        <div className="container_input">
          <MdOutlineMail color="#CCC" size={20} />
          <input
            placeholder="User or Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container_input">
          <RiLockPasswordLine color="#CCC" size={20} />

          <input
            placeholder="Password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="container_select">
          <select
            required
            value={plano}
            onChange={(e) => setPlano(e.target.value)}
          >
            <option>Selecione um plano</option>
            <option value="Gratuito">Gratuito - 10 anúncios por mês</option>
            <option value="Bronze">Bronze - 20 anúncios por mês</option>
            <option value="Prata">Prata - 50 anúncios por mês</option>
            <option value="Ouro">Ouro - anúncios ilimitado</option>
          </select>
        </div>
        <button className="botao_telas_iniciais">Cadastrar</button>
      </form>
    </div>
  );
}

export default CriarConta;
