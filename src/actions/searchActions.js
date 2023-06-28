// Action type
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_SELECTED_PARK = 'SET_SELECTED_PARK';

// Action creator to set the search results
export const setSearchResults = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  };
};

// Action creator to set the selected park
export const setSelectedPark = (park) => {
    return {
      type: SET_SELECTED_PARK,
      payload: park
    };
  };