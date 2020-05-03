import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

// redux action
import {
  deleteUser,
  editingStatus,
  getUser,
  showAlert
} from '../redux/usersAction';

export default function ActionButtons({ id }) {
  const { dispatch, users } = useContext(GlobalContext);

  // async delete???
  // [add] window.confirm
  async function handleDelete() {
    if (!id) return;
    // confirmation
    if (!window.confirm(`Deleting id:${id}, Are you Sure?`)) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/robots/${id}`);
      dispatch(deleteUser(id));
      console.log(res.data);
    } catch (error) {
      dispatch(showAlert(error.response.data.msg, 'danger'));
      console.error(error.message);
    } finally {
      setTimeout(() => {
        dispatch(showAlert(''));
      }, 2000);
    }
  }

  function handleEdit() {
    if (!id || !users.length) return;

    const toEditUser = users.find(user => user.id === id);

    dispatch(editingStatus(true));
    dispatch(getUser(toEditUser));
  }

  return (
    <>
      <Link to={`/read/${id}`} className="btn btn-sm btn-info">
        Read
      </Link>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={handleEdit}
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
