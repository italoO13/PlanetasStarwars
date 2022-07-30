import React from 'react';
import ProviderWars from './context/providerWars';
import Table from './componets/Table/Table';
import * as C from './App.styles';
import Filter from './componets/Filtros/Filter';

function App() {
  return (
    <ProviderWars>
      <C.Container className="AppConteudo">
        <C.Title>Filtre todos os planetas de StarWars</C.Title>
        <Filter />
        <Table />
      </C.Container>
    </ProviderWars>
  );
}

export default App;
