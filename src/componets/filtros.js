import React, { useContext } from 'react';
import ContextWars from '../context/contextWars';

function Filter() {
  const { filterByName, changeName, saveFilter,
    colsSelect } = useContext(ContextWars);

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
    </form>
  );
}

export default Filter;
