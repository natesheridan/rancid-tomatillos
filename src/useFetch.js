import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoint)
        .then(response => {
          if(!response.ok) {
            throw new Error ( { errorStatus: response.status, errorMessage: response.status.text } )
              //server has encountered an error
              // <ErrorCard
              //   errorStatus={response.status}
              //   errorMessage={`It appears we/'ve encountered an error ${response.status.text}. Please hit the back button & try again.`}
              // />
          // )
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
          setError(error);
        })
    }, 1000);
  }, [endpoint]);

  return { data, isPending, error };
}

export default useFetch;
