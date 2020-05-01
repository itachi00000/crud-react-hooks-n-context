import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

// redux action
import { deleteUser } from '../redux/usersAction';

export default function ActionButtons({ id }) {
  const { dispatch } = useContext(GlobalContext);

  // async delete???
  async function handleDelete() {
    try {
      const res = await axios.delete(`http://localhost:5000/api/robots/${id}`);
      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
    return dispatch(deleteUser(id));
  }

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
