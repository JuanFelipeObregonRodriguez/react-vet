import React from 'react';

function Form() {
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

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-10">
        <label key="label" htmlFor="id" className="block text-gray-700 uppercase font-bold">
          nombre de la mascota
          <input type="text" placeholder="nombre" id="id" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </label>
      </form>
    </div>
  );
}

export default Form;
