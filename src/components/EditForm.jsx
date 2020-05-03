import React, { useContext, useState } from 'react';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

// redux action
import {
  editUser,
  getUser,
  editingStatus,
  showAlert
} from '../redux/usersAction';

export default function EditForm() {
  const { dispatch, currentUser } = useContext(GlobalContext);
  const [input, setInput] = useState(currentUser);

  function resetForm() {
    // reset currentUser
    dispatch(getUser(null));
    // set editing: false
    dispatch(editingStatus(false));
  }

  async function handleUpdate() {
    try {
      const { id, name, username, email } = input;
      if (!name || !username || !email) {
        dispatch(showAlert('Lack of Info', 'danger'));
        return;
      }
      const resp = await axios.put(`http://localhost:5000/api/robots/${id}`, {
        name,
        username,
        email
      });
      dispatch(editUser(resp.data));
      dispatch(showAlert('User Updated', 'primary'));
      resetForm();
    } catch (error) {
      if (error.response) {
        console.log('errorResponse: ', error.response.data.msg);
        dispatch(showAlert(error.response.data.msg, 'danger'));
      } else {
        console.log('errorMsg:', error.message);
        dispatch(showAlert(error.message, 'danger'));
      }
    } finally {
      setTimeout(() => {
        // clearing msg
        dispatch(showAlert(''));
      }, 2000);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }
  // console.log('Edit input', input);
  // console.log('Edit Status', editing);
  const { name, email, username } = input;

  return (
    <div className="col-lg-4">
      <h3>Edit Form</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="clearfix float-right">
          <button
            type="button"
            onClick={handleUpdate}
            className="btn btn-primary mr-2"
          >
            Update
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="btn btn-outline-danger "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
