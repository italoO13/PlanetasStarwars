import React from 'react';
import ProviderWars from './context/providerWars';
import Table from './componets/table';
import './App.css';

function App() {
  return (
    <ProviderWars>
      <div className="AppConteudo">
        <span>Hello, App!!</span>
        <Table />
      </div>
    </ProviderWars>
  );
}

export default App;
