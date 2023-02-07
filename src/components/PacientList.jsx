/* eslint-disable react/function-component-definition */
import React from 'react';
import Paciente from './Paciente';

const PacientList = () => (
  <div className="md:w-1/2 lg:w-2/5 h-screen overflow-scroll ml-14">
    <h2 className="font-black text-3xl text-center ">Lista de pacientes</h2>
    <p className="text-xl mt-5 mb-5 font-bold text-center">
      administra tus
      {' '}
      <span className="text-indigo-600 font-bold">
        pacientes y citas
      </span>
    </p>

    <Paciente />
    <Paciente />
    <Paciente />
    <Paciente />

  </div>
);

export default PacientList;
