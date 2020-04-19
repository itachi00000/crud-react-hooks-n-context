import {
  ADD_USER,
  DELETE_USER,
  SEARCH_USER,
  FETCH_USERS,
  GET_USER
} from './types';

const nextUserId = 0;

export function addUser(user) {
  return {
    type: ADD_USER,
    id: nextUserId + 1,
    payload: user
  };
}

export function searchUser(searchQuery) {
  return {
    type: SEARCH_USER,
    payload: searchQuery
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id
  };
}

export function fetchUsers(users) {
  return {
    type: FETCH_USERS,
    payload: users
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  };
}
