import React, { useContext } from 'react';
import ContextWars from '../context/contextWars';

function Filter() {
  const { filterByName, changeName } = useContext(ContextWars);

  return (
    <form>
      <input
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ changeName }
      />
    </form>
  );
}

export default Filter;
