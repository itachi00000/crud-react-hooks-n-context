import React, { useContext, useEffect } from 'react';
import axios from 'axios';
//
import { GlobalContext } from '../context/GlobalState';

// action
import { fetchUsers } from '../redux/usersAction';

// comp.
import ActionButtons from './ActionButtons';

export default function Table() {
  const { users, searchQuery, currentUser, dispatch } = useContext(
    GlobalContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:5000/api/robots');
        return dispatch(fetchUsers(resp.data));
      } catch (error) {
        return console.error(error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log('users:', users);
  console.log('searchQuery:', searchQuery);
  console.log('currentUser:', currentUser);

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

  const displayUsers = filteredUsers.map(({ id, name, username, email }) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <ActionButtons id={id} />
      </td>
    </tr>
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{displayUsers}</tbody>
    </table>
  );
}
