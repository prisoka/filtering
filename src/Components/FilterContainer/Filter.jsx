import React from 'react';

const Filter = ({ labelName, list, selected }) => {
  return (
    <div className='SelectContainer'>
      <label>{labelName}</label>
      <select
        value={selected}
        name={labelName}
        id={labelName}
        onChange={() => {}}
      >
        <option>Select your option</option>
        {list.map((val, idx) => (
          <option key={idx}>{val}</option>
        ))}
      </select>
      <button onClick={() => {}}>Reset</button>
    </div>
  );
};

export default Filter;
