import React, { useState } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 90%);
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid black;
`;


function App() {

  // State de frases
  const [frase, setFrase] = useState({});

  const consultaApi = async () => {
    const consulta = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await consulta.json();
    setFrase(frase[0]);
  }

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton
        onClick={consultaApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
