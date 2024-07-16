import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';
import { useState } from 'react';

function App() {

  const [rows, setRows] = useState([]);

  const handleFormSubmit = (values) => {
    setRows([...rows, values]);
  };

  return (
    <div className="App">
      <h1>Form Task</h1>
      <Form onSubmit={handleFormSubmit} />
      <Table rows={rows} />
    </div>
  );
}

export default App;
