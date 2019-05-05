import React, { useState } from 'react';
import RecourceList from './recourceList';

const App = () => {
  const[recource, setRecource] = useState('posts');

  return (
    <div>
     <div>
      <button onClick={() => setRecource('posts')}> posts </button>
      <button onClick={() => setRecource('todos')}> todos </button>
     </div>
     <RecourceList recource={recource} />
    </div>
  );
}

export default App;
