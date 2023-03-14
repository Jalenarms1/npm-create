import logo from './logo.svg';
import './App.css';
import FileInput from './components/FileInput';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('')
  console.log(state);

  const handleFileInputChange = (data) => {

    // set the updated data in state
    setState(data);
  };

  return (
    <FileInput className="bg-slate-600 text-slate-100 rounded-md w-64 p-10" onChange={handleFileInputChange} />
  );
}

export default App;
