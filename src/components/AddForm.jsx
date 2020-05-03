import React, { useState, useContext } from 'react';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalState';

// redux action
import { addUser, showAlert } from '../redux/usersAction';

export default function AddForm() {
  const initStateForm = {
    name: '',
    username: '',
    email: ''
  };

  const [input, setInput] = useState(initStateForm);
  const { dispatch } = useContext(GlobalContext);

  async function handleAddUser() {
    try {
      const { name, username, email } = input;
      if (!name || !username || !email) {
        dispatch(showAlert('Lack of Info', 'danger'));
        return;
      }
      const resp = await axios.post('http://localhost:5000/api/robots', {
        name,
        username,
        email
      });
      dispatch(addUser(resp.data[0]));
      dispatch(showAlert('Added new User', 'success'));
      setInput(initStateForm);
    } catch (error) {
      if (error.response) {
        console.log('error.response:', error.response.data.msg);
        dispatch(showAlert(error.response.data.msg, 'danger'));
        return;
      }
      console.log('error.message: ', error.message);
      dispatch(showAlert(error.message, 'danger'));
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

  const { name, email, username } = input;

  return (
    <div className="col-lg-4">
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
