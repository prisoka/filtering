import React, { useState } from 'react';
import DataTable from './DataTable/DataTable';
import FilterContainer from './FilterContainer/FilterContainer';
import SearchBar from './SearchBar/SearchBar';

const mockData = [
  { name: 'priscilla', color: 'blue', code: 111, note: 'demo' },
  { name: 'bananas', color: 'yellow', code: 222, note: 'anything' },
  { name: 'apples', color: 'red', code: 333, note: 'demo' },
  { name: 'bananas', color: 'yellow', code: 444, note: '' },
];

const columns = ['name', 'color', 'code', 'note'];

const Main = () => {
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);

  return (
    <div className='Main'>
      <FilterContainer />
      <SearchBar />
      <DataTable filteredData={filteredData} columns={columns} />
    </div>
  );
};

export default Main;
