import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

import "./App.css";

function App() {
  return (
    <div className="container_home">
      <div className="container_esquerda">
        <h2>Welcome back</h2>
        <p>you can sign in to acess with yout existing account.</p>
      </div>
      <div className="container_direita">
        <h1>Sign</h1>

        <div className="container_input">
          <CiUser color="#CCC" size={20} />
          <input placeholder="User or Email" />
        </div>

        <div className="container_input">
          <RiLockPasswordLine />
          <input placeholder="Password" />
        </div>
      </div>
    </div>
  );
}

export default App;
