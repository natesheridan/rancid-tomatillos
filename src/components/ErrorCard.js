import React from 'react';

const ErrorCard = (error) => {
  return (
    <section>
      <p>{error.status}</p>
      <p>ErrorCard: Holy moly, we've got a problem.</p>
      <p>{error.message}</p>
    </section>
  )
}

export default ErrorCard;
