import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(response => {
        if(!response.ok) {
          throw new Error ('Sorry to inform you, but our server is down.  Please try again.');
        }
        return response.json()
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        setIsPending(false);
        setError(error.message);
      })
  }, [endpoint]);

  console.log (endpoint)
  return { data, isPending, error };
}

export default useFetch;
