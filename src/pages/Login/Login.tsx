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
        throw new Error();
      }

      await Swal.fire({
        icon: "info",
        title: "Usuário encontrado",
        text: "Seu usuário foi encontrado e vc já será redirecionado",
      });

      navegar("anuncios");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Erro ao realizar login",
        text: "deu ruim",
      });
    }
  }

  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Welcome back</h2>
        <p>you can sign in to acess with yout existing account.</p>
      </div>
      <form
        onSubmit={realizarLogin}
        className="container_direita_telas_iniciais"
      >
        <h1>Sign</h1>

        <div className="container_input">
          <CiUser color="#CCC" size={20} />
          <input
            placeholder="User or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="container_input">
          <RiLockPasswordLine color="#CCC" size={20} />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="botao_telas_iniciais">
          Sign In
        </button>

        <p>
          new here ?{" "}
          <Link className="link_criar_conta" to="/criar-conta">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
