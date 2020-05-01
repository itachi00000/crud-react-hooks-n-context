import {
  ADD_USER,
  SEARCH_USER,
  DELETE_USER,
  FETCH_USERS,
  GET_USER
} from './types';

// redux state=initState  xxxx
export function usersReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case FETCH_USERS:
      return { ...state, users: action.payload, currentUser: null };
    case SEARCH_USER:
      return { ...state, searchQuery: action.payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case GET_USER:
      return {
        ...state,
        users: [],
        currentUser: action.payload
      };
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
