import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecources = (recource) => {
  const [ recources, setRecources ] = useState( [] );

  const fetchRecource = async (recource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${recource}`);
    setRecources(response.data);
  }

  useEffect(() => {
    fetchRecource(recource)
  }, [recource])

  return recources;
}

export default useRecources;
