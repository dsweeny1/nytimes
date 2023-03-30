import React from 'react';
import './Error.css';
import error from '../../Images/whoops.png';

const Error = () => {
  return (
    <div className='error'>
      <img src={ error } data-cy='error-image' alt="Error message" />
      <h2>Something Went Wrong! Please Go Home!</h2>
    </div>
  );
};

export default Error;