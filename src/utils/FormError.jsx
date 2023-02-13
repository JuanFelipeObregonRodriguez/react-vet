/* eslint-disable react/function-component-definition */
import React from 'react';

// eslint-disable-next-line react/prop-types
const FormError = ({ message }) => (

  <div className="bg-red-800 text-white text-center rounded-lg p-3 font-bold mb-3 mt-5">
    {message}
  </div>

);

export default FormError;
