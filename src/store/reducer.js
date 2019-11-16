import * as actionTypes from './actions';
import * as localstorage from '../utils/localstorage';

const localStored = localstorage.loadState();

const initialState = {
  isAuthenticated: false,
  token: {},
  searchTerm: '',
  albums: null,
  ...localStored,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.tokenProps,
      };

    case actionTypes.UNSET_TOKEN:
      return {
        ...state,
        isAuthenticated: false,
        token: {},
      };

    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    case actionTypes.REQUEST_SEARCH:
      return {
        ...state,
        searchLoading: true,
        albums: null,
      };

    case actionTypes.RECEIVE_SEARCH:
      return {
        ...state,
        searchLoading: false,
        albums: action.albums,
      };

    default:
      return state;
  }
};

export default reducer;
