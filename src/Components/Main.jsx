import React, { useState, useEffect, useReducer } from 'react';
import { initialDataState, dataReducer } from './data.state';
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
  const [data, setData] = useState([...mockData]);
  const [dataState, dispatch] = useReducer(dataReducer, initialDataState);

  const {
    allDataValues,
    nameList,
    colorList,
    noteList,
    selected,
    filteredData,
    searchKeyword,
  } = dataState;

  useEffect(() => {
    dispatch({ type: 'set_filtered_data', payload: { data } });
    dispatch({ type: 'set_all_data_values', payload: { data } });
    dispatch({ type: 'set_name_list', payload: { data } });
    dispatch({ type: 'set_color_list', payload: { data } });
    dispatch({ type: 'set_note_list', payload: { data } });
  }, []);

  const handleSelectOnChange = (e) => {
    let value = e.target.value;
    dispatch({ type: 'handle_select_change', payload: { data, value } });
  };

  const handleSelectReset = () => {
    dispatch({ type: 'handle_select_reset', payload: { data } });
  };

  const handleSetSearchKeyword = (e) => {
    let value = e.target.value;
    dispatch({ type: 'handle_set_search_keyword', payload: { value } });
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    dispatch({
      type: 'handle_search',
      payload: { data: filteredData },
    });
  };

  const handleSearchClear = (e) => {
    dispatch({ type: 'handle_search_reset', payload: { data } });
  };

  return (
    <div className='Main'>
      <h2>Filtering playground</h2>
      <FilterContainer
        nameList={nameList}
        colorList={colorList}
        noteList={noteList}
        selected={selected}
        handleSelectOnChange={handleSelectOnChange}
        handleSelectReset={handleSelectReset}
      />
      <SearchBar
        handleSetSearchKeyword={handleSetSearchKeyword}
        handleSearchClick={handleSearchClick}
        handleSearchClear={handleSearchClear}
      />
      <DataTable filteredData={filteredData} columns={columns} />
    </div>
  );
};

export default Main;
