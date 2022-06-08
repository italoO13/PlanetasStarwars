import React, { useContext } from 'react';
import ContextWars from '../context/contextWars';

function Filter() {
  const { filterByName, changeName, filter } = useContext(ContextWars);

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
        <option value="population">population</option>
        <option value="diameter">diameter</option>
        <option value="orbital_period">orbital_period</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
        onClick={ filter }
        data-testid="button-filter"
      >
        Filtro

      </button>
    </form>
  );
}

export default Filter;
