import React, { useContext } from 'react';

// context
import { GlobalContext } from '../context/GlobalState';

// redux action
import { searchUser } from '../redux/usersAction';

export default function SearchField() {
  const { searchQuery: inputValue, stableDispatch } = useContext(GlobalContext);

  const handleInputChange = (e) => {
    stableDispatch(searchUser(e.target.value));
  };

  return (
    <div role="form">
      <input
        type="search"
        name="search"
        placeholder="Type Name"
        className="form-control"
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
}
