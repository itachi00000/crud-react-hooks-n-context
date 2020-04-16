import {
  ADD_USER,
  DELETE_USER,
  SEARCH_QUERY,
  FETCH_USERS
} from '../actionTypes';

const nextUserId = 0;

export function addUser(user) {
  return {
    type: ADD_USER,
    id: nextUserId + 1,
    payload: user
  };
}

export function searchQuery(query) {
  return {
    type: SEARCH_QUERY,
    payload: query
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id
  };
}

export function fetchUsers(url) {
  return {
    type: FETCH_USERS,
    payload: url // ??
  };
}
