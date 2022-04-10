import React, { useState } from 'react';
import './style.scss'

export default function PaginaInicial() {
   const [ randomNumber, setRandomNumber ] = useState(0);

    function generateNumber() {
        const newNumber = Math.floor(Math.random() * (100 - 1) + 1);
        setRandomNumber(newNumber);
}

  return (
      <div className="content">
          <h1>Número Aleatório:</h1>
          <h3>{randomNumber}</h3>
          <div className="area-button">
                <p>
                    Clique no botão abaixo para gerar um número aleatório:
                </p>
                <button onClick={generateNumber}> 
                    Gerar número
                </button>
          </div>
      </div>
  );
}
 
