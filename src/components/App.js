import React, { useState } from 'react';

const App = () => {
  const[recource, setRecource] = useState('posts');

  return (
    <div>
     <div>
      <button onClick={() => setRecource('posts')}> posts </button>
      <button onClick={() => setRecource('todos')}> todos </button>
     </div>
     {recource}
    </div>
  );
}

export default App;
