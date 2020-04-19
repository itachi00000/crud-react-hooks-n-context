import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

// redux action
import { deleteUser } from '../redux/usersAction';

function ActionButtons({ id }) {
  const { dispatch } = useContext(GlobalContext);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/robots/${id}`);
      console.log(`${res.data}`);
    } catch (error) {
      console.error(error.message);
    }
    return dispatch(deleteUser(id));
  };

  return (
    <>
      <Link to={`/read/${id}`} className="btn btn-sm btn-info">
        Read
      </Link>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => {}}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}

export default ActionButtons;
