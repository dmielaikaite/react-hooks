import React from 'react';
import useRecources from './useRecources';

const UserList = () => {
  const users = useRecources('users');

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
};

export default UserList;
