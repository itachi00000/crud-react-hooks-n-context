import React, { useContext, useEffect } from 'react';
import axios from 'axios';

// context
import { GlobalContext } from '../context/GlobalState';

// comp.
import AddForm from './AddForm';
import EditForm from './EditForm';
import ActionButtons from './ActionButtons';

export default function Table() {
  const {
    users,
    searchQuery,
    currentUser,
    stableDispatch,
    editing
  } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:5000/api/robots');
        return stableDispatch(fetchUsers(resp.data));
      } catch (error) {
        return console.error(error.message);
      }
    };
    console.log('use-effect getAllUser');

    fetchData();
  }, [stableDispatch]);

  console.log('users:', users);
  console.log('searchQuery:', searchQuery);
  console.log('currentUser:', currentUser);
  console.log('editing:', editing);
  console.log('<<<<*******************>>>>');

  const filteredUsers = users.filter((user) => {
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
    <>
      <div className="col-lg-6">
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
          <tbody>
            {filteredUsers.length ? (
              displayUsers
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  No Data Available....
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {editing ? <EditForm /> : <AddForm />}
    </>
  );
}
