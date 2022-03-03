import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable from './DataTable/DataTable';
import FilterContainer from './FilterContainer/FilterContainer';
import SearchBar from './SearchBar/SearchBar';
import './Main.css';

const mockData = [
  { name: 'oranges', color: 'orange', code: 111, note: 'demo' },
  { name: 'bananas', color: 'yellow', code: 222, note: 'anything' },
  { name: 'apples', color: 'red', code: 333, note: 'demo' },
  { name: 'bananas', color: 'yellow', code: 444, note: '' },
];

const columns = ['name', 'color', 'code', 'note'];

const Main = () => {
  const [data, setData] = useState(mockData);
  const [allDataValues, setAllDataValues] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [noteList, setNoteList] = useState([]);
  const [selected, setSelected] = useState('');

  const [filteredData, setFilteredData] = useState(mockData);

  const handleAllDataValues = () => {
    let allValues = [];

    data.map((item) => {
      return Object.values(item).forEach((val) => allValues.push(val));
    });

    setAllDataValues(allValues);
  };

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
    });

    setNameList(names);
    setColorList(colors);
    setNoteList(notes);
  };

  useEffect(() => {
    handleAllDataValues();
    handleLists();
  }, [data]);

  return (
    <div className='Main'>
      <h2>Filtering playground</h2>
      <FilterContainer
        nameList={nameList}
        colorList={colorList}
        noteList={noteList}
        selected={selected}
      />
      <SearchBar />
      <DataTable filteredData={filteredData} columns={columns} />
    </div>
  );
};

export default Main;
