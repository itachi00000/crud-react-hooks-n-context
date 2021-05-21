import {
  ADD_USER,
  SEARCH_USER,
  DELETE_USER,
  FETCH_USERS,
  GET_USER,
  EDITING,
  EDIT_USER,
  SHOW_ALERT,
  IS_ERROR,
  IS_LOADING
} from './types';

//   for editingUser
// same as .mapping
function updatingUsers(users, updUser) {
  const userIndex = users.findIndex((user) => user.id === updUser.id);
  const updatedUsers = [
    ...users.slice(0, userIndex),
    updUser,
    ...users.slice(userIndex + 1)
  ];
  return updatedUsers;
}

// redux state=initState
// global context give initState
export function usersReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case EDIT_USER:
      return { ...state, users: updatingUsers(state.users, payload) };
    case EDITING:
      return { ...state, editing: payload };
    case SEARCH_USER:
      return { ...state, searchQuery: payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload)
      };
    case FETCH_USERS:
      return { ...state, users: payload, currentUser: null };
    case GET_USER:
      return {
        ...state,
        currentUser: payload
      };
    case IS_ERROR:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          isLoading: false,
          isError: payload
        }
      };
    case IS_LOADING:
      return {
        ...state,
        fetchStatus: { ...state.fetchStatus, isLoading: true }
      };
    case SHOW_ALERT:
      return {
        ...state,
        alerts: {
          ...state.alerts,
          alertMsg: payload,
          alertType: action.alertType
        }
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
