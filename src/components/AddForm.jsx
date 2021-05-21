import React, { useState, useContext } from 'react';
import axios from 'axios';

// ctx
import { GlobalContext } from '../context/GlobalState';

// action
import { addUser, showAlert } from '../redux/usersAction';

// utils
import { SERVER_URL } from '../server-url';

// main
export default function AddForm() {
  const initStateForm = {
    name: '',
    username: '',
    email: ''
  };

  const [input, setInput] = useState(initStateForm);
  const { dispatch, stableDispatch } = useContext(GlobalContext);

  const handleAddUser = async () => {
    try {
      const { name, username, email } = input;

      if (!name || !username || !email) {
        return stableDispatch(showAlert('Lack of Info', 'danger'));
      }

      const resp = await axios.post(`${SERVER_URL}`, {
        name,
        username,
        email
      });

      dispatch(addUser(resp.data));

      stableDispatch(showAlert('Added new User', 'success'));

      // reset
      return setInput(initStateForm);
    } catch (error) {
      if (error.response) {
        console.error('error.response:', error.response.data.msg);
        return stableDispatch(showAlert(error.response.data.msg, 'danger'));
      }
      console.error('error.message: ', error.message);
      return stableDispatch(showAlert(error.message, 'danger'));
    } finally {
      setTimeout(() => {
        // clearing msg
        stableDispatch(showAlert(''));
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const { name, email, username } = input;

  return (
    <div className="col-lg-3 col-md-3">
      <h3>Add Form</h3>
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

        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={handleAddUser}
        >
          Add
        </button>
      </form>
    </div>
  );
}
