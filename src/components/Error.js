import React from 'react';

const ErrorCard = ({ errorStatus, errorMessage }) => {
  return (
    <section>
      <p>{errorStatus}</p>
      <p>Holy moly, we've got a problem.</p>
      <p>{errorMessage}</p>
    </section>
  )
}

export default ErrorCard;
