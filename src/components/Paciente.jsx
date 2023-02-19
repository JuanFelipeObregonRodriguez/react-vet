/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import React from 'react';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const {
    nombre, propietario, email, alta, sintomas, id,
  } = paciente;

  const handlerDelete = () => {
    const respuesta = confirm('¿está seguro que desea eliminar el usuario?');

    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="mt-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre:
        {' '}
        <span className="font-normal normal-case">
          {' '}
          {nombre}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        propietario:
        {' '}
        <span className="font-normal normal-case">
          {' '}
          {propietario}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        email:
        {' '}
        <span className="font-normal normal-case">
          {' '}
          {email}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha de alta:
        {' '}
        <span className="font-normal normal-case">
          {' '}
          {alta}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        sintomas:
        {' '}
        <span className="font-normal normal-case">
          {' '}
          {sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="bg-indigo-600 py-2 px-10 hover:bg-indigo-700 text-white font-bold  ease-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md hover:rounded-xl transition-all cursor-pointer ml-2"
          onClick={() => setPaciente(paciente)}
        >
          editar
        </button>

        <button
          type="button"
          className="bg-red-600 py-2 px-10 hover:bg-red-700 text-white font-bold ease-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md hover:rounded-xl transition-all cursor-pointer mr-2"
          onClick={handlerDelete}
        >
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
