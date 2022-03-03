import React from 'react';
import Filter from './Filter';
import '../Main.css';

const FilterContainer = ({
  nameList,
  colorList,
  noteList,
  selected,
  handleSelectOnChange,
  handleSelectReset,
}) => {
  return (
    <div>
      <Filter
        labelName='Name'
        list={nameList}
        selected={selected}
        handleSelectOnChange={handleSelectOnChange}
        handleSelectReset={handleSelectReset}
      />
      <Filter
        labelName='Color'
        list={colorList}
        selected={selected}
        handleSelectOnChange={handleSelectOnChange}
        handleSelectReset={handleSelectReset}
      />
      <Filter
        labelName='Note'
        list={noteList}
        selected={selected}
        handleSelectOnChange={handleSelectOnChange}
        handleSelectReset={handleSelectReset}
      />
    </div>
  );
};

export default FilterContainer;
