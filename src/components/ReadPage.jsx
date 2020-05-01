import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

// action
import { getUser } from '../redux/usersAction';

export default function ReadPage() {
  const [errorFetch, setErrorFetch] = useState(false);
  const { currentUser, users, searchQuery, dispatch } = useContext(
    GlobalContext
  );
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`http://localhost:5000/api/robots/${id}`);
        const user = resp.data;
        dispatch(getUser(user));
      } catch (error) {
        console.error('errror', error.message);
        setErrorFetch(true);
      }
    };
    fetchData();
  }, [dispatch, id]);

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
    <div>
      <h3>Read Page for {id}</h3>
      <p>name: {name}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
}
