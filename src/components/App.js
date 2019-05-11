import React, { useState } from 'react';
import RecourceList from './recourceList';
import UserList from './userList';

const App = () => {
  const[recource, setRecource] = useState('posts');

  return (
    <div>
      <UserList />
     <div>
      <button onClick={() => setRecource('posts')}> posts </button>
      <button onClick={() => setRecource('todos')}> todos </button>
     </div>
     <RecourceList recource={recource} />
    </div>
  );
}

export default App;
