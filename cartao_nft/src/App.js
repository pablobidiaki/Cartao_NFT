import React from 'react';
import imagemNFT from './componentes/imgs/image-equilibrium.jpg';
import Detalhes from './componentes/detalhes';
import Criador from './componentes/criador';
import NomeNFT from './componentes/nomenft'
import './App.css';

function App() {
  return (
      <div id='card'>
        <img src={imagemNFT} />
        <NomeNFT />
        <p className='NFTdescrition'>Nossa coleção Equilibrium promove equilíbrio e calma </p>
        <Detalhes />
        <hr />
        <Criador />
      </div>
  );
}

export default App;
