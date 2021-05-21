import React, { useContext, useState } from 'react';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

// action
import {
  editUser,
  getUser,
  editingStatus,
  showAlert
} from '../redux/usersAction';

// utils
import { SERVER_URL } from '../server-url';

// main
export default function EditForm() {
  const { dispatch, currentUser, stableDispatch } = useContext(GlobalContext);
  const [input, setInput] = useState(currentUser);

  // CANCEL BUTTON
  const resetForm = () => {
    // reset currentUser
    dispatch(getUser(null));
    // set editing: false
    dispatch(editingStatus(false));

    dispatch(showAlert(''));
  };

  const handleUpdate = async () => {
    try {
      // input-form
      const { id, name, username, email } = input;

      if (!name || !username || !email) {
        return stableDispatch(showAlert('Lack of Info', 'danger'));
      }

      const resp = await axios.put(`${SERVER_URL}/${id}`, {
        name,
        username,
        email
      });

      dispatch(editUser(resp.data));

      stableDispatch(showAlert('User Updated', 'primary'));

      return resetForm();
    } catch (error) {
      if (error.response) {
        console.error('errorResponse: ', error.response.data.msg);
        return stableDispatch(showAlert(error.response.data.msg, 'danger'));
      }
      console.error('errorMsg:', error.message);
      return stableDispatch(showAlert(error.message, 'danger'));
    } finally {
      setTimeout(() => {
        // clearing msg
        stableDispatch(showAlert(''));
      }, 2000);
    }
  };

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  // console.log('Edit input', input);
  // console.log('Edit Status', editing);
  const { name, email, username } = input;

  return (
    <div className="col-lg-3 col-md-3">
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
