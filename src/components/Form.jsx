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

      <form className="bg-white shadow-lg rounded-lg py-10 px-5 mt-10 mb-10">
        <div className="mt-5">
          <label key="label" htmlFor="id" className="block text-gray-700 uppercase font-bold">
            nombre de la mascota
            <input type="text" placeholder="nombre" id="id" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </label>
        </div>
        <div className="mt-5">
          <label key="label" htmlFor="personid" className="block text-gray-700 uppercase font-bold">
            nombre del propietario
            <input type="text" placeholder="nombre" id="personid" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </label>
        </div>
        <div className="mt-5">
          <label key="label" htmlFor="emailid" className="block text-gray-700 uppercase font-bold">
            email
            <input type="email" placeholder="email" id="personid" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </label>
        </div>
        <div className="mt-5">
          <label key="label" htmlFor="dateid" className="block text-gray-700 uppercase font-bold">
            alta
            <input type="date" id="personid" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </label>
        </div>
        <div className="mt-5">
          <label key="label" htmlFor="sibtomasid" className="block text-gray-700 uppercase font-bold">
            sintomas
            <textarea id="sintomasid" placeholder="describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </label>
        </div>
        <input type="submit" value="agregar paciente" className=" w-full p-3 text-white uppercase font-bold mt-5  ease-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-300 duration-300 rounded-md hover:rounded-xl transition-all cursor-pointer" />
      </form>
    </div>
  );
}

export default Form;
