import React from 'react';

const DataTable = ({ filteredData, columns }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, idx) => {
            let row = [];
            Object.keys(data).forEach((key) => row.push(data[key]));
            return (
              <tr key={idx}>
                {row.map((val, idx) => (
                  <td key={idx}>{val}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
