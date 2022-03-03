import React from 'react';

const Filter = ({ labelName, list }) => {
  return (
    <div>
      <label>{labelName}</label>
      <select value='' name={labelName} id={labelName} onChange={() => {}}>
        {list.map((val, idx) => (
          <option key={idx}>{val}</option>
        ))}
      </select>
      <button onClick={() => {}}>Reset</button>
    </div>
  );
};

export default Filter;
