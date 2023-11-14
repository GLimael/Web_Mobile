import { useEffect, useRef, useState } from 'react';
import './App.css';

function MeuComponente() {
  // Criando uma referência mutável para o botão
  const meuBotaoRef = useRef(null);
  const [source, setSource] = useState("");
  const [tituloBotao, setTituloBotao] = useState("Botão Mágico");

  // Função para mudar a cor do botão ao passar o mouse sobre ele
  const mudarCor = () => {
    if (meuBotaoRef.current) {
      meuBotaoRef.current.style.backgroundColor = 'lightblue';
      meuBotaoRef.current.style.padding = '10px';
    }
  };

  // Função para restaurar a cor original do botão
  const restaurarCor = () => {
    if (meuBotaoRef.current) {
      meuBotaoRef.current.style.backgroundColor = '';
      meuBotaoRef.current.style.padding = '0px';
    }
  };

  const marselo = () => {
    setSource("../src/assets/marselo.jpg");
  }

  const sairMarselo = () => {
    setSource("")
  }

  return (
    <div>
      {/* Associando a referência mutável ao botão */}
      <button
        ref={meuBotaoRef}
        onMouseEnter={mudarCor}
        onMouseLeave={restaurarCor}
        onClick={marselo}
      >
        {tituloBotao}
      </button>
      <ExemploComponente />
      <img src={source} alt="" onClick={sairMarselo} />
    </div>
  );
}

function ExemploComponente() {
  const meuInputRef = useRef(null);

  useEffect(() => {
    // Foca no input quando o componente é montado
    meuInputRef.current.focus();
  }, []);

  const mudarFonte = () => {
    meuInputRef.current.style.fontSize = '20px';
  }

  const sair = () => {
    meuInputRef.current.style.fontSize = '12px';
  }

  return (
    <div>
      <input 
      ref={meuInputRef}
      onMouseEnter={mudarFonte}
      onMouseLeave={sair}
      />
    </div>
  );
}

export default MeuComponente;
