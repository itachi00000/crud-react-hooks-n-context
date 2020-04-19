import React, { useReducer, createContext } from 'react';
import { usersReducer } from '../redux/usersReducer';

const initialState = {
  users: [],
  currentUser: null,
  searchQuery: ''
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  // function fetchingUsers(usersS) {
  //   dispatch({ type: 'FETCH_USERS', payload: usersS });
  // }

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
