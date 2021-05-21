import {
  ADD_USER,
  SEARCH_USER,
  DELETE_USER,
  FETCH_USERS,
  GET_USER
} from './types';

// redux state=initState  xxxx
export function usersReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case FETCH_USERS:
      return { ...state, users: payload, currentUser: null };
    case SEARCH_USER:
      return { ...state, searchQuery: payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload)
      };
    case GET_USER:
      return {
        ...state,
        users: [],
        currentUser: payload
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
