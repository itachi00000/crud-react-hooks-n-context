import {
  ADD_USER,
  DELETE_USER,
  SEARCH_USER,
  FETCH_USERS,
  GET_USER,
  EDITING,
  EDIT_USER,
  SHOW_ALERT,
  IS_ERROR,
  IS_LOADING
} from './types';

export function showAlert(alertMsg, alertType = '') {
  return {
    type: SHOW_ALERT,
    alertType, // string
    payload: alertMsg // string
  };
}

// REQUEST STATUS (loading, success, error)

export function setIsLoading(bool) {
  return {
    type: IS_LOADING,
    payload: bool
  };
}

export function setIsError(bool) {
  return {
    type: IS_ERROR,
    payload: bool
  };
}

// CRUD+S
export function searchUser(searchQuery) {
  return {
    type: SEARCH_USER,
    payload: searchQuery // string
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user // object
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    payload: id // number
  };
}

export function editUser(updUser) {
  return {
    type: EDIT_USER,
    payload: updUser // object
  };
}

export function fetchUsers(users) {
  return {
    type: FETCH_USERS,
    payload: users // array of object
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user // object
  };
}

export function editingStatus(bool) {
  return {
    type: EDITING,
    payload: bool // boolean
  };
}
