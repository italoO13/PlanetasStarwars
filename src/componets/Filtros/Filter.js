/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import ContextWars from '../../context/contextWars';
import * as C from './Filter.styles';

function Filter() {
  const { filterByName, changeName, saveFilter,
    colsSelect, filterByNumber, removeFilter,
    removeAllFilter, saveOrder } = useContext(ContextWars);

  const [orderFilter, setorderFilter] = useState({
    columns: 'population',
    sort: 'ASC',
  });

  const changeOrder = ({ target }) => {
    const { name, value } = target;
    setorderFilter({
      ...orderFilter,
      [name]: value,
    });
  };
  return (
    <C.Container>
      <C.WrapperFilterNumeric>
        <input
          className="searchPlanet"
          placeholder="Escolha o nome do planeta"
          name="name"
          data-testid="name-filter"
          value={ filterByName.name }
          onChange={ changeName }
        />
        <C.FiltersPlanets>

          <div className="filter">
            <label htmlFor="colFilter">
              Coluna
              <select
                value={ filterByName.colFilter }
                onChange={ changeName }
                name="colFilter"
                data-testid="column-filter"
              >
                {colsSelect
                  .map(
                    (col, index) => <option key={ index } value={ col }>{col}</option>,
                  )}
              </select>

            </label>
            <label htmlFor="operator">
              Operador
              <select
                value={ filterByName.operator }
                name="operator"
                data-testid="comparison-filter"
                onChange={ changeName }
              >
                <option value="maior que">maior que</option>
                <option value="menor que">menor que</option>
                <option value="igual a">igual a</option>
              </select>
            </label>
            <input
              name="number"
              value={ filterByName.number }
              data-testid="value-filter"
              type="number"
              placeholder="0"
              onChange={ changeName }
            />
          </div>
          <div className="buttonsFilters">
            <button
              type="button"
              onClick={ () => {
                saveFilter();
              } }
              data-testid="button-filter"
            >
              <i className="fa-solid fa-filter" />
              Filtrar
            </button>
            <button
              data-testid="button-remove-filters"
              onClick={ removeAllFilter }
              type="button"
            >
              <i className="fa-solid fa-filter-circle-xmark" />
              Retirar Filtro
            </button>

          </div>
        </C.FiltersPlanets>
      </C.WrapperFilterNumeric>

      <C.FiltersAplicated className="filters">
        <p>Filtros Aplicados</p>
        {filterByNumber.map(({ colFilter, operator, number }, index) => (
          <li key={ index } data-testid="filter">
            <p className={ colFilter }>{`${colFilter} ${operator} ${number}`}</p>
            <button onClick={ removeFilter } type="button">
              X
            </button>
          </li>
        ))}
      </C.FiltersAplicated>
      <C.OrderFilter>
        <select onChange={ changeOrder } name="columns" data-testid="column-sort">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <label htmlFor="order">
          Crescente
          <input
            defaultChecked
            onChange={ changeOrder }
            data-testid="column-sort-input-asc"
            name="sort"
            value="ASC"
            type="radio"
          />
        </label>
        <label htmlFor="order">
          Decrescente
          <input
            onChange={ changeOrder }
            name="sort"
            data-testid="column-sort-input-desc"
            value="DESC"
            type="radio"
          />
        </label>

        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => saveOrder(orderFilter) }
        >
          Ordenar
        </button>
      </C.OrderFilter>
    </C.Container>

  );
}

export default Filter;
