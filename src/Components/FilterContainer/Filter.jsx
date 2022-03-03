import React from 'react';

const Filter = ({
  labelName,
  list,
  selected,
  handleSelectOnChange,
  handleSelectReset,
}) => {
  return (
    <div className='SelectContainer'>
      <label>{labelName}</label>
      <select
        value={selected}
        name={labelName}
        id={labelName}
        onChange={handleSelectOnChange}
      >
        <option>Select your option</option>
        {list.map((val, idx) => (
          <option key={idx}>{val}</option>
        ))}
      </select>
      <button onClick={() => handleSelectReset()}>Reset</button>
    </div>
  );
};

export default Filter;
