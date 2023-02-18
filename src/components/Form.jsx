/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import FormError from '../utils/FormError';

const Form = ({
  pacientes, setPacientes, paciente, setPaciente,
}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietarios] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  // const handleChange = (e) => {
  //   setNombre(e.target.value);
  // };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setPropietarios(paciente.propietario);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  const generateId = () => {
    const randomId = Math.random().toString().substring(2);
    const dateId = Date.now().toString();

    return randomId + dateId;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('enviando formulario');

    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('todos los campos son requeridos');

      setError(true);
      return;
    }
    setError(false);

    const pacientesObjeto = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,

    };

    console.log(pacientesObjeto);

    if (paciente.id) {
      pacientesObjeto.id = paciente.id;

      // eslint-disable-next-line max-len
      const editarPaciente = pacientes.map((pacienteState) => (pacienteState.id === paciente.id ? pacientesObjeto : pacienteState));

      setPacientes(editarPaciente);
      setPaciente('');
    } else {
      pacientesObjeto.id = generateId();

      setPacientes([...pacientes, pacientesObjeto]);
    }

    setNombre('');
    setPropietarios('');
    setEmail('');
    setAlta('');
    setSintomas('');
  };
  return (

    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center">
        añade pacientes y
        {' '}
        <span className="text-indigo-500"> administralos</span>
      </p>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-lg rounded-lg py-10 px-5 mt-10 mb-10"
      >
        <div className="mt-5">
          <label
            key="label"
            htmlFor="id"
            className="block text-gray-700 uppercase font-bold"
          >
            nombre de la mascota
            {' '}

            <input
              type="text"
              placeholder="nombre"
              id="id"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-5">
          <label
            key="label"
            htmlFor="personid"
            className="block text-gray-700 uppercase font-bold"
          >
            nombre del propietario
            <input
              type="text"
              placeholder="nombre"
              id="personid"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietarios(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-5">
          <label
            key="label"
            htmlFor="emailid"
            className="block text-gray-700 uppercase font-bold"
          >
            email
            <input
              type="email"
              placeholder="email"
              id="personid"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-5">
          <label
            key="label"
            htmlFor="dateid"
            className="block text-gray-700 uppercase font-bold"
          >
            alta
            <input
              type="date"
              id="personid"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-5">
          <label
            key="label"
            htmlFor="sibtomasid"
            className="block text-gray-700 uppercase font-bold"
          >
            sintomas
            <textarea
              id="sintomasid"
              placeholder="describe los sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </label>
        </div>
        {
          error && <FormError message="TODOS LOS CAMPOS SON REQUERIDOS" />
        }
        <input
          type="submit"
          value={paciente.id ? 'editar paciente' : 'agregar paciente'}
          className=" w-full p-3 text-white uppercase font-bold mt-5  ease-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-300 duration-300 rounded-md hover:rounded-xl transition-all cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
