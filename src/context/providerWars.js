import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextWars from './contextWars';

function ProviderWars({ children }) {
  const [data, setdata] = useState([]);
  const [dataFilter, setdataFilter] = useState(data);
  const [filterByName, setfilterByName] = useState({
    name: '',
    colFilter: 'population',
    operator: 'maior que',
    number: '0',
  });

  const changeName = ({ target }) => {
    setfilterByName({ ...filterByName, [target.name]: target.value });
  };

  // Faz requisição a API e salva dados na variavel data, é retirado a coluna residents
  useEffect(() => {
    const fetchApiWars = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      const dataAPI = results.map((obj) => {
        const cols = Object.keys(obj).filter((name) => name !== 'residents');
        return cols.reduce((acc, col) => ({ ...acc, [col]: obj[col] }), {});
      });
      setdata(dataAPI);
      setdataFilter(dataAPI);
    };
    fetchApiWars();
  }, []);

  // Filtros

  useEffect(() => {
    const filterName = () => {
      const filter = data.filter((line) => line.name.includes(filterByName.name));
      setdataFilter(filter);
    };
    filterName();
  }, [filterByName.name, data]);

  const filter = () => {
    console.log('vixe, chamou');
    // const filters = Object.keys(filterByName).filter(((item) => item !== 'name'));
    const { operator, colFilter, number } = filterByName;
    switch (operator) {
    case 'maior que':
      setdataFilter(dataFilter
        .filter((obj) => Math.floor(obj[colFilter]) > Math.floor(number)));
      break;
    case 'menor que':
      setdataFilter(dataFilter
        .filter((obj) => Math.floor(obj[colFilter]) < Math.floor(number)));
      break;
    case 'igual a':
      setdataFilter(dataFilter
        .filter((obj) => Math.floor(obj[colFilter]) === Math.floor(number)));
      break;
    default:
      return true;
    }
  };

  const context = {
    dataFilter,
    filterByName,
    changeName,
    filter,
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
