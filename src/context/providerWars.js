import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextWars from './contextWars';

function ProviderWars({ children }) {
  const [data, setdata] = useState([]);

  // Faz requisição a API e salva dados na variavel data, é retirado a coluna residents
  useEffect(() => {
    const fetchApiWars = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setdata(results.map((obj) => {
        const cols = Object.keys(obj).filter((name) => name !== 'residents');
        return cols.reduce((acc, col) => ({ ...acc, [col]: obj[col] }), {});
      }));
    };
    fetchApiWars();
  }, []);

  const context = {
    data,
  };
  return (
    <ContextWars.Provider value={ context }>
      {children}
    </ContextWars.Provider>

  );
}

ProviderWars.propTypes = {
  Childre: PropTypes.string,
}.isRequired;

export default ProviderWars;
