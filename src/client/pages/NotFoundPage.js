import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  const head = () => {
    return (
      <Helmet>
        <title>404 not found</title>
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      <h1>404 Route</h1>
    </div>
  );
};

export default {
  component: NotFoundPage,
};
