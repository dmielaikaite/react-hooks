import React, { useState, useEffect } from 'react';
import axios from 'axios';

const  RecourceList = (props) => {

  const [ recources, setRecources ] = useState( [] );

  const fetchRecource = async (recource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${recource}`);
    setRecources(response.data);
  }

  useEffect(() => {
    fetchRecource(props.recource)
  }, [props.recource])

  return (
    <ul>
      {recources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
  );
}

export default RecourceList;
