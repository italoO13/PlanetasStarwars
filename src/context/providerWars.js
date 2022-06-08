import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextWars from './contextWars';

function ProviderWars({ children }) {
  const [data, setdata] = useState([]);
  const [dataFilter, setdataFilter] = useState([]);
  const [filterByName, setfilterByName] = useState({
    name: '',
    colFilter: 'population',
    operator: 'maior que',
    number: '0',
  });
  const [filterByNumber, setfilterByNumber] = useState([]);

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

  useEffect(() => {
    const filter = () => {
      const filterReduce = filterByNumber
        .reduce((acc, { operator, colFilter, number }) => {
          switch (operator) {
          case 'maior que':
            return acc
              .filter((obj) => Math.floor(obj[colFilter]) > Math.floor(number));
          case 'menor que':
            return acc
              .filter((obj) => Math.floor(obj[colFilter]) < Math.floor(number));
          case 'igual a':
            return acc
              .filter((obj) => Math.floor(obj[colFilter]) === Math.floor(number));
          default:
            return true;
          }
        }, dataFilter);
      setdataFilter(filterReduce);
    };
    filter();
  }, [filterByNumber]);

  const saveFilter = () => {
    setfilterByNumber([...filterByNumber,
      {
        colFilter: filterByName.colFilter,
        operator: filterByName.operator,
        number: filterByName.number,
      }]);
  };

  const context = {
    dataFilter,
    filterByName,
    changeName,
    saveFilter,
  };

  return (
    <ContextWars.Provider value={ context }>
      {children}
    </ContextWars.Provider>

  );
}

ProviderWars.propTypes = {
  Childre: PropTypes.objectOf,
}.isRequired;

export default ProviderWars;
