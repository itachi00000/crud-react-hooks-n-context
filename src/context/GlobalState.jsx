import React, {
  useReducer,
  createContext,
  useCallback
  // useEffect,
} from 'react';

// reducer
import { usersReducer } from '../redux/usersReducer';

// init
const initialState = {
  users: [],
  currentUser: null,
  searchQuery: '',
  editing: false,
  inputs: { name: '', username: '', email: '' }, // ??
  alerts: { alertMsg: '', alertType: '', id: null },
  fetchStatus: { isLoading: false, isError: false, isSuccess: false }
};

// const initialState2 = {};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const stableDispatch = useCallback(dispatch, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        stableDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );

  // GET ALL, (from old)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resp = await axios.get(`${SERVER_URL}`);
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

  // function fetchingUsers(usersS) {
  //   dispatch({ type: 'FETCH_USERS', payload: usersS });
  // }

  // function dispatchFetchUsers(users) {
  //   dispatch(fetchUsers(users));
  // }
};
