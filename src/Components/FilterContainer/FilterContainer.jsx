import React from 'react';
import Filter from './Filter';
import '../Main.css';

const FilterContainer = ({ nameList, colorList, noteList, selected }) => {
  return (
    <div>
      <Filter labelName='Name' list={nameList} selected={selected} />
      <Filter labelName='Color' list={colorList} selected={selected} />
      <Filter labelName='Note' list={noteList} selected={selected} />
    </div>
  );
};

export default FilterContainer;
