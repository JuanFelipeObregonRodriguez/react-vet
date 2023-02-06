import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PacientList from './components/PacientList';
import './App.css';

function App() {
  return (
    <div className="container mx-auto mt-20 bg-slate-50">
      <Header />
      <div className="md:mt-12 flex ml-8">
        <Form />
        <PacientList />

      </div>

    </div>
  );
}

export default App;
