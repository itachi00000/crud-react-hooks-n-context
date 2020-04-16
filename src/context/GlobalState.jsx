import React, { useReducer, createContext } from 'react';
import { usersReducer } from '../redux/users/usersReducer';
import userData from '../usersData';

const initialState = {
  users: userData,
  searchQuery: ''
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
