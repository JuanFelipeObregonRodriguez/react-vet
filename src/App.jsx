/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PacientList from './components/PacientList';
import './App.css';

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (

    <div className="container mx-auto mt-20 bg-slate-50">
      <Header />
      <div className="md:mt-12 md:flex ml-8">
        <Form setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente} />
        <PacientList pacientes={pacientes} setPaciente={setPaciente} />
      </div>

    </div>
  );
};

export default App;
