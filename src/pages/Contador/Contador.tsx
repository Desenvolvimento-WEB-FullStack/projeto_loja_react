import { useState } from "react";

function Contador() {
  //  let numeroAtual = 10;
  const [numeroAtual, setNumeroAtual] = useState(10);

  function aumentarValor() {
    console.log(numeroAtual);
    // numeroAtual = numeroAtual + 1;
    setNumeroAtual(numeroAtual + 1);
  }

  function diminuirValor() {
    // numeroAtual = numeroAtual - 1;
    setNumeroAtual(numeroAtual - 1);
  }

  function multiplicarPor1000() {
    setNumeroAtual(numeroAtual * 1000);
  }

  return (
    <div>
      <h1>Valor atual: {numeroAtual}</h1>
      <button onClick={aumentarValor}>Incrementar</button>
      <button onClick={diminuirValor}>Decrementar</button>
      <button onClick={multiplicarPor1000}>Multiplicar por 1000</button>
    </div>
  );
}

export default Contador;
