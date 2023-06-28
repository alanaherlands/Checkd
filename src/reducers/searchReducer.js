import { SET_SEARCH_RESULTS, SET_SELECTED_PARK } from '../actions/searchActions';

const initialState = {
  searchResults: [],
  selectedPark: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    case SET_SELECTED_PARK:
      return {
        ...state,
        selectedPark: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;