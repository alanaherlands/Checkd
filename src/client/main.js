import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from '../actions/searchActions';

const SearchBar = () => {
  const [userInput, setUserInput] = useState('');

  const dispatch = useDispatch();

  // Fetch park data on input change
  useEffect(() => {
    if (userInput.trim() !== '') {
      fetchParkData();
    } else {
      dispatch(setSearchResults([])); // Clear search results if input is empty
    }
  }, [userInput, dispatch]);

  // Fetch park data from the NYC OpenData API
  const fetchParkData = async () => {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/parks.json');
      const data = await response.json();

      // Filter the park names based on user input
      const filteredParks = data
        .filter(park => park.parkname.toLowerCase().startsWith(userInput.toLowerCase()))
        .map(park => park.parkname);

      dispatch(setSearchResults(filteredParks));
    } catch (error) {
      console.error('Error fetching park data:', error);
    }
  };

  return (
    <div>
      <h1>Parks Search</h1>
      <form>
        <input
          type="text"
          placeholder="Search for parks..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const SearchResults = () => {
  const searchResults = useSelector(state => state.searchResults);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((park, index) => (
          <li key={index}>{park}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default App;