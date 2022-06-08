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
  const [colsSelect, setcolsSelect] = useState(['population', 'diameter',
    'orbital_period', 'rotation_period', 'surface_water']);

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
        }, data.filter((line) => line.name.includes(filterByName.name)));
      setdataFilter(filterReduce);
    };
    const updateColsSelect = () => {
      setcolsSelect(
        colsSelect
          .filter((col) => !filterByNumber
            .some(({ colFilter }) => colFilter === col)),
      );
    };
    filter();
    updateColsSelect();
  }, [filterByNumber]);

  useEffect(() => {
    const updateinputs = () => {
      setfilterByName({ ...filterByName, colFilter: colsSelect[0] });
    };
    updateinputs();
  }, [colsSelect]);

  const saveFilter = () => {
    setfilterByNumber([...filterByNumber,
      {
        colFilter: filterByName.colFilter,
        operator: filterByName.operator,
        number: filterByName.number,
      }]);
  };
  const removeFilter = (event) => {
    const colName = event.target.previousElementSibling.className;
    // const li = event.target.parentElement;
    setfilterByNumber(
      filterByNumber.filter(({ colFilter }) => colFilter !== colName),
    );
    setcolsSelect(
      ['population', 'diameter',
        'orbital_period', 'rotation_period', 'surface_water'],
    );
  };
  const removeAllFilter = () => {
    setfilterByNumber([]);
    setcolsSelect(
      ['population', 'diameter',
        'orbital_period', 'rotation_period', 'surface_water'],
    );
  };

  const context = {
    dataFilter,
    filterByName,
    changeName,
    saveFilter,
    colsSelect,
    filterByNumber,
    removeFilter,
    removeAllFilter,
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
