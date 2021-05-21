import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

// action
import { getUser } from '../redux/usersAction';

// comp.
import BackHome from '../components/BackHome';

// utils
import { SERVER_URL } from '../server-url';

// main
export default function ReadPage() {
  const [errorFetch, setErrorFetch] = useState(false);
  const { currentUser, users, searchQuery, stableDispatch } = useContext(
    GlobalContext
  );

  const { id } = useParams();

  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${SERVER_URL}/${id}`);
        stableDispatch(getUser(resp.data));
      } catch (error) {
        console.error('at fetch-a-user', error.message);
        setErrorFetch(true);
      }
    };
    console.log('useEffect- getOneUser');
    fetchData();
  }, [id, stableDispatch]);

  // for checking
  console.log('users:', users);
  console.log('searchQuery:', searchQuery);
  console.log('currentUser:', currentUser);

  // redirect when fetch error
  if (errorFetch) {
    return <Redirect to="/error" />;
  }

  // Loading component
  if (!currentUser) {
    return <div>Loading</div>;
  }

  const { name, username, email } = currentUser;
  return (
    <>
      <BackHome />
      <div className="col-md-8">
        <h3>Read Page for {id}</h3>
        <p>name: {name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>
      </div>
    </>
  );
}
