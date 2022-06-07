import React from 'react';
import ProviderWars from './context/providerWars';
import Table from './componets/table';
import './App.css';
import Filter from './componets/filtros';

function App() {
  return (
    <ProviderWars>
      <div className="AppConteudo">
        <span>Hello, App!!</span>
        <Filter />
        <Table />
      </div>
    </ProviderWars>
  );
}

export default App;
