import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults, setSelectedPark } from '../actions/searchActions';

const SearchBar = () => {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the selected park based on the userInput (e.g., from the searchResults array)
    const selectedPark = /* Retrieve the selected park based on the userInput */;
    dispatch(setSelectedPark(selectedPark));
  };

  return (
    <div>
      <h1>Parks Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for parks..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;