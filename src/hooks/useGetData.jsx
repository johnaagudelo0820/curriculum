import { useState, useEffect } from 'react';
const api = 'https://us-central1-curriculum-john.cloudfunctions.net/api';

const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data.data))
  }, []);

  return data;
}

export default useGetData