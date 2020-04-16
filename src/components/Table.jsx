import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// comp.
import ActionButtons from './ActionButtons';

export default function Table() {
  const { users, searchQuery } = useContext(GlobalContext);

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
        <ActionButtons selectedId={id} />
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
