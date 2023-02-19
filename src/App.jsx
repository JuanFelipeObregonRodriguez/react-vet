/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PacientList from './components/PacientList';
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(initialState);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    // eslint-disable-next-line no-shadow
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);

    console.log(pacientesActualizados);
    setPacientes(pacientesActualizados);
  };

  return (

    <div className="container mx-auto mt-20  justify-center bg-slate-50">
      <Header />
      <div className="md:mt-12 md:flex m-2">
        <Form setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente} />
        <PacientList pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>

    </div>
  );
};

export default App;
