import React, { useContext } from 'react';
import ContextWars from '../context/contextWars';

function Table() {
  const { data } = useContext(ContextWars);
  const renderLine = (line, index) => {
    const cols = Object.keys(line);
    return (
      <tr key={ index }>
        {cols.map((colName, indexFilms) => {
          if (colName === 'films') {
            return (
              <td key={ indexFilms }>
                {line[colName].map((item) => item)}
              </td>
            );
          }
          return (
            <td key={ index }>
              {line[colName]}
            </td>
          );
        })}
      </tr>
    );
  };
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.map(renderLine)}
      </tbody>
    </table>
  );
}

export default Table;
