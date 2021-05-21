import React, { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

// reducer
import { usersReducer } from '../redux/usersReducer';
import { fetchUsers } from '../redux/usersAction';

import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FETCH_USERS,
  GET_USER,
  SEARCH_USER
} from '../redux/types';

// actions
import {
  fetchUsers,
  showAlert,
  getUser,
  setIsError
} from '../redux/usersAction';

const initialState = {
  users: [],
  currentUser: null,
  searchQuery: '',
  editing: false,
  inputs: { name: '', username: '', email: '' },
  alerts: { alertMsg: '', alertType: '', id: null },
  fetchStatus: { isLoading: false, isError: false, isSuccess: false }
};

const initialState2 = {};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  // GET ALL, (from old)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resp = await axios.get('http://localhost:5000/api/robots');
  //       dispatch(fetchUsers(resp.data));
  //       dispatch(showAlert('Fetch Success', 'success'));
  //     } catch (error) {
  //       console.error(error.message);
  //       dispatch(showAlert(error.message, 'danger'));
  //     } finally {
  //       setTimeout(() => {
  //         // clearing alert
  //         dispatch(showAlert(''));
  //       }, 2000);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const stableDispatch = useCallback(dispatch, []);
  // function fetchingUsers(usersS) {
  //   dispatch({ type: 'FETCH_USERS', payload: usersS });
  // }

  function dispatchFetchUsers(users) {
    dispatch(fetchUsers(users));
  }

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, dispatchFetchUsers, stableDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
