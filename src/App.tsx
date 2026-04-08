import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

import "./App.css";

function App() {
  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Welcome back</h2>
        <p>you can sign in to acess with yout existing account.</p>
      </div>
      <div className="container_direita_telas_iniciais">
        <h1>Sign</h1>

        <div className="container_input">
          <CiUser color="#CCC" size={20} />
          <input placeholder="User or Email" />
        </div>

        <div className="container_input">
          <RiLockPasswordLine color="#CCC" size={20} />
          <input placeholder="Password" />
        </div>

        <button className="botao_logar">Sign In</button>

        <p>
          new here ?{" "}
          <a className="link_criar_conta" href="">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
