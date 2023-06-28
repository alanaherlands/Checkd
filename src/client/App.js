import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import ParkInfo from './ParkInfo';

const App = () => {
  return (
    <div>
      <SearchBar />
      <SearchResults />
      <ParkInfo />
    </div>
  );
};

export default App;