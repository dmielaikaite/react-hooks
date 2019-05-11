import React from 'react';

import useRecources from './useRecources';

const  RecourceList = (props) => {
  const recources = useRecources(props.recource);

  return (
    <ul>
      {recources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
  );
}

export default RecourceList;
