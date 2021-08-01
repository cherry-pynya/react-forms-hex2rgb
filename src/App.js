import Form from "./Form/Form";

import './App.css';

import { useState } from 'react';

function App() {
  const [bgColor, bgChange] = useState({
    hex: '#fff',
  });
  
  const change = (obj) => {
    bgChange(obj)
  };

  const {hex, isHex} = bgColor;

  return (
    <div className="App" style={{ backgroundColor: hex }} >
      <Form backgroundChange={change} hex={hex} isHex={isHex} />
    </div>
  );
}

export default App;
