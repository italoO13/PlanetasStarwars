import React, { useContext } from 'react';
import ContextWars from '../../context/contextWars';
import * as C from './Table.styles';

function Table() {
  const { dataFilter } = useContext(ContextWars);
  const renderLine = (line, index) => {
    const cols = Object.keys(line);
    return (
      <tr key={ (index + 1) * Math.random() }>
        {cols.map((colName, indexFilms) => {
          if (colName === 'films') {
            return (
              <td key={ indexFilms * (Math.random() + 1) }>
                {line[colName].map((item) => item)}
              </td>
            );
          }
          if (colName === 'name') {
            return (
              <td data-testid="planet-name" key={ (index + 1) * Math.random() }>
                {line[colName]}
              </td>
            );
          }
          return (
            <td key={ (index + 1) * Math.random() }>
              {line[colName]}
            </td>
          );
        })}
      </tr>
    );
  };
  return (
    <C.Container>
      <C.Table>
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
          {dataFilter.map(renderLine)}
        </tbody>
      </C.Table>
    </C.Container>
  );
}

export default Table;
