import React from 'react';
import '../Main.css';

const SearchBar = ({
  handleSetSearchKeyword,
  handleSearchClick,
  handleSearchClear,
}) => {
  return (
    <form className='SelectContainer'>
      <label>Search </label>
      <input type='text' onChange={handleSetSearchKeyword} />
      <button onClick={handleSearchClick}>Search</button>
      <button onClick={handleSearchClear}>Clear</button>
    </form>
  );
};

export default SearchBar;
