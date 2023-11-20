import { useEffect, useRef, useState } from 'react';
import './App.css';

function MeuComponente() {
  //Contador
  const [contador, setContador] = useState(0);
  //Número para loop
  const [numero, setNumero] = useState(0);
  //Número para usar com useRef
  const numeroRef = useRef(0);
  //Váriavel que se referência ao DOM do button, podendo usar funções DOM no seu objeto useRef
  const botaoRef = useRef();
  //Número antigo do contador com useRef
  const contadorAntigoRef = useRef();
  //Número antigo do contador com useState
  const [contadorAntigoState, setContadorAntigoState] = useState();

  //A cada atualização do componente, ele chama a função dentro do useEffect
  useEffect(() => {
    // setNumero(numero+10);

    console.log("Número do useRef: ", numeroRef.current);
    numeroRef.current = Math.random();
  });

  //Simulando um click quando a página é carregada
  useEffect(() => {
    console.log("DOM do button: ", botaoRef.current);
    botaoRef.current.click();
    console.log("Clicado!");
  }, [])

  //Absorvendo o valor antigo do contador
  useEffect(() => {
    contadorAntigoRef.current = contador;
    //Se ativado a linha abaixo, o useRef não armazena o valor antigo, e sim o atual
    // setContadorAntigoState(contador);
  }, [contador])

  //Comentário a cada renderização do componente
  console.log("Renderizou");

  return (
    <div>
      <h1>O valor do contador é: {contador}</h1>
      <h1>O valor do número é: {numero}</h1>
      <h2>*useRef* O valor antigo do contador é: {contadorAntigoRef.current}</h2>
      <h2>*useState* O valor antigo do contador é: {contadorAntigoState}</h2>
      <button 
      ref={botaoRef}
      onClick={() => {
        setContador(contador+1);

      }}>Contador +1</button>

      <h1>O valor do númeroRef é: {numeroRef.current}</h1>

    </div>
  );
}

export default MeuComponente;
