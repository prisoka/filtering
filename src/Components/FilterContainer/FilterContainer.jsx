import React from 'react';
import Filter from './Filter';

const FilterContainer = ({ nameList, colorList, noteList }) => {
  return (
    <div>
      <Filter labelName='Name' list={nameList} />
      <Filter labelName='Color' list={colorList} />
      <Filter labelName='Note' list={noteList} />
    </div>
  );
};

export default FilterContainer;
