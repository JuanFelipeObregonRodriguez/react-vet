/* eslint-disable react/prop-types */
import React from 'react';
import Paciente from './Paciente';

function PacientList({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-2/5 h-screen overflow-scroll ml-2">
      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">Lista de pacientes</h2>
          <p className="text-xl mt-5 mb-5 font-bold text-center">
            administra tus
            {' '}
            <span className="text-indigo-600 font-bold">
              pacientes y citas
            </span>
          </p>
          {
        pacientes.map((paciente) => (
          <Paciente
            paciente={paciente}
            key={paciente.id}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))
        }
        </>
      )
        : (
          <>
            <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-5 font-bold text-center">
              aqui se mostraran los
              {' '}
              <span className="text-indigo-600 font-bold">
                nuevos pacientes
              </span>
            </p>
          </>
        )}

    </div>
  );
}

export default PacientList;
