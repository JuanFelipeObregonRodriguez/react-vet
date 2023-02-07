/* eslint-disable react/function-component-definition */

import React from 'react';

const Paciente = () => (
  <div className="mt-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      nombre:
      {' '}
      <span className="font-normal normal-case"> milan</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      propietario:
      {' '}
      <span className="font-normal normal-case"> Juan Obregon</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      email:
      {' '}
      <span className="font-normal normal-case"> Juan@ghotmail.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      fecha de alta:
      {' '}
      <span className="font-normal normal-case"> 09/07/2022</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      sintomas:
      {' '}
      <span className="font-normal normal-case"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quam enim nostrum amet corrupti tempora quas molestias nesciunt sint alias!</span>
    </p>
  </div>
);

export default Paciente;
