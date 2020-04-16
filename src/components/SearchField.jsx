import React, { useState, useEffect, useContext, useReducer } from 'react';
import { userReducer, initState } from '../redux/users/usersReducer';
import { DataContext } from '../context';
import { searchQuery } from '../redux/users/usersAction';

function SearchField() {
  const [input, setInput] = useState('');
  // // const [value, setValue] = useState('');
  const { filterUsers } = useContext(DataContext);

  function handleInputChange(e) {
    setInput(e.target.value);
    filterUsers(input);
  }
  // useEffect(() => {
  //   return () =>
  // }, [input]);

  console.log('state-query at Search', input);

  return (
    <div role="form">
      <input
        type="search"
        name="search"
        placeholder="Type Name"
        className="form-control"
        onChange={handleInputChange}
        value={input}
      />
    </div>
  );
}
export default SearchField;
