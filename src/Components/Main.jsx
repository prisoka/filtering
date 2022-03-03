import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable from './DataTable/DataTable';
import FilterContainer from './FilterContainer/FilterContainer';
import SearchBar from './SearchBar/SearchBar';

const mockData = [
  { name: 'oranges', color: 'orange', code: 111, note: 'demo' },
  { name: 'bananas', color: 'yellow', code: 222, note: 'anything' },
  { name: 'apples', color: 'red', code: 333, note: 'demo' },
  { name: 'bananas', color: 'yellow', code: 444, note: '' },
];

const columns = ['name', 'color', 'code', 'note'];

const Main = () => {
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [nameList, setNameList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [noteList, setNoteList] = useState([]);

  const handleLists = () => {
    let names = [];
    let colors = [];
    let notes = [];

    data.map((data) => {
      return Object.keys(data).forEach((key) => {
        if (key === 'name') {
          data[key] !== '' ? names.push(data[key]) : names.push('empty name');
        } else if (key === 'color') {
          data[key] !== ''
            ? colors.push(data[key])
            : colors.push('empty color');
        } else if (key === 'note') {
          data[key] !== '' ? notes.push(data[key]) : notes.push('empty note');
        }
      });
    });

    setNameList(names);
    setColorList(colors);
    setNoteList(notes);
  };

  useEffect(() => {
    handleLists();
  }, [data]);

  return (
    <div className='Main'>
      <FilterContainer
        nameList={nameList}
        colorList={colorList}
        noteList={noteList}
      />
      <SearchBar />
      <DataTable filteredData={filteredData} columns={columns} />
    </div>
  );
};

export default Main;
