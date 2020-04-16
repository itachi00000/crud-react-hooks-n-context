import React, { createContext, useState, useEffect } from 'react';
//

const DataContext = createContext();

function useFetch(url) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(userData => setUsers(userData))
      .catch(() => console.log('errof use Fetch'));
  }, [url]);

  return { users, setUsers };
}

function DataContextProvider({ children }) {
  const { users } = useFetch('http://localhost:5000/robots');
  const [newUser, setNewUser] = useState(users);

  function filterUsers(query) {
    const newU = users.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setNewUser(newU);
  }

  console.log(newUser);
  if (users.length || newUser.length) {
    return (
      <DataContext.Provider value={{ users, newUser, filterUsers }}>
        {children}
      </DataContext.Provider>
    );
  }
  return <div>Loading</div>;
}

const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer };
