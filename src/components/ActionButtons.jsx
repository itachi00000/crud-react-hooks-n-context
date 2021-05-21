import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ctx
import { GlobalContext } from '../context/GlobalState';

//  action
import {
  deleteUser,
  editingStatus,
  getUser,
  showAlert
} from '../redux/usersAction';

// utils
import { SERVER_URL } from '../server-url';

// main
export default function ActionButtons({ id }) {
  const { stableDispatch, dispatch, users } = useContext(GlobalContext);

  // DELETE BUTTON + window.confirm()
  const handleDelete = async () => {
    if (!id || !users.length) return;

    // confirmation
    if (!window.confirm(`Deleting id:${id}, Are you Sure?`)) return;

    try {
      // no-return
      await axios.delete(`${SERVER_URL}/${id}`);

      dispatch(deleteUser(id));

      stableDispatch(showAlert(`Deleted ${id}`, 'primary'));
    } catch (error) {
      console.error(error.message);
      stableDispatch(showAlert(error.response.data.msg, 'danger'));
    } finally {
      // do we need finally?
      setTimeout(() => {
        stableDispatch(showAlert(''));
      }, 2000);
    }
  };

  // EDIT BUTTON > EDIT FORM
  const handleEdit = async () => {
    if (!id || !users.length) return;

    stableDispatch(editingStatus(true));

    try {
      // no need to fetch, its already fetch
      const userToEdit = users.find((user) => user.id === id);

      dispatch(getUser(userToEdit));
      stableDispatch(showAlert('Editing...', 'info'));
    } catch (error) {
      console.error(error.message);
      stableDispatch(showAlert('Error Edit', 'danger'));
    }
  };

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
