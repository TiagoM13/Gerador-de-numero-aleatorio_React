import React, { useState } from 'react';
import './style.css'

export default function PaginaInicial() {
// Variável que recebe o número
   const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

// Função de gerar o número aleatório
    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
        setNumeroAleatorio(novoNumero);
}

  return (
      <div className="conteudo-centralizado">
          <h3>Número Aleatório:</h3>
          <h1>{ numeroAleatorio }</h1>

          <div className="area-botao">
                <label>
                    Clique no botão abaixo para gerar um número aleatório:
                </label>

                <button onClick={ gerarNumero }> 
                    Gerar número
                </button>
          </div>
      </div>
  );
}
 
