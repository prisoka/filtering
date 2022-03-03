import React from 'react';
import '../Main.css';

const SearchBar = () => {
  return (
    <form className='SelectContainer'>
      <label>Search </label>
      <input type='text' onChange={() => {}} />
      <button onClick={() => {}}>Search</button>
      <button onClick={() => {}}>Clear</button>
    </form>
  );
};

export default SearchBar;
