import React, { useContext, useState } from 'react';
import ContextWars from '../context/contextWars';

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
    <form>
      <input
        name="name"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ changeName }
      />
      <select
        value={ filterByName.colFilter }
        onChange={ changeName }
        name="colFilter"
        data-testid="column-filter"
      >
        {colsSelect
          .map((col, index) => <option key={ index } value={ col }>{col}</option>)}
      </select>

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
      <input
        name="number"
        value={ filterByName.number }
        data-testid="value-filter"
        type="number"
        placeholder="0"
        onChange={ changeName }
      />
      <button
        type="button"
        onClick={ () => {
          saveFilter();
        } }
        data-testid="button-filter"
      >
        Filtro

      </button>
      <button
        data-testid="button-remove-filters"
        onClick={ removeAllFilter }
        type="button"
      >
        Remove Filtros
      </button>

      <ul className="filters">
        {filterByNumber.map(({ colFilter, operator, number }, index) => (
          <li key={ index } data-testid="filter">
            <p className={ colFilter }>{`${colFilter} ${operator} ${number}`}</p>
            <button onClick={ removeFilter } type="button">X</button>
          </li>
        ))}
      </ul>
      <div>
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
      </div>
    </form>

  );
}

export default Filter;
