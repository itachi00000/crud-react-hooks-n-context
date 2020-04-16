import {
  ADD_USER,
  SEARCH_QUERY,
  DELETE_USER,
  FETCH_USERS
} from '../actionTypes';

// import robotData from '../../robots';

export const initState = {
  users: [],
  query: '',
  currentId: null // no use yet
};

export function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, items: [...state.users, action.payload] };
    case DELETE_USER:
      return {
        ...state,
        items: state.users.filter(item => item.id !== action.payload)
      };
    case SEARCH_QUERY:
      return { ...state, query: action.payload };
    case FETCH_USERS:
      return { ...state, items: [...state.users, action.payload] };
    default:
      return state;
  }
}

export function otherReducer(state, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
