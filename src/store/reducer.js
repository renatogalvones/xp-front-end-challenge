import * as actionTypes from './actions';
import * as localstorage from '../utils/localstorage';

const localStored = localstorage.loadState();

const initialState = {
  isAuthenticated: false,
  token: {},
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

    default:
      return state;
  }
};

export default reducer;
