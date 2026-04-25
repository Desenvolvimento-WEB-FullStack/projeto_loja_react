import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

import "./Login.css";

import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navegar = useNavigate();

  async function realizarLogin(event: React.SubmitEvent) {
    try {
      event.preventDefault();

      const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "post",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resposta.ok === false) {
        const dados = await resposta.json();
        throw new Error(dados.error);
      }

      await Swal.fire({
        icon: "info",
        title: "Usuário encontrado",
        text: "Seu usuário foi encontrado e vc já será redirecionado",
      });

      navegar("/anuncios");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao realizar login",
        text: error.message,
      });
    }
  }

  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Bem vindo</h2>
        <p>Você pode acessar com sua conta existente..</p>
      </div>
      <form
        onSubmit={realizarLogin}
        className="container_direita_telas_iniciais"
      >
        <h1>Login</h1>

        <div className="container_input">
          <CiUser color="#CCC" size={20} />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
        </div>

        <div className="container_input">
          <RiLockPasswordLine color="#CCC" size={20} />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
        </div>

        <button type="submit" className="botao_telas_iniciais">
          Logar
        </button>

        <p>
          Novo aqui ?{" "}
          <Link className="link_criar_conta" to="/criar-conta">
            Criar uma conta
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
