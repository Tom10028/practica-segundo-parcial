
import './App.css';
import React, {useState} from 'react';
import Texto from "./components/Texto"
import Boton from './components/Boton';
function App() {
  const [mostrar, setMostrar] = useState(true);
  const click = ()=>{
    setMostrar((mostrar)=>!mostrar);   
  }
  return (
    <div className="App">
      <Boton funCLick={click}/>
        {mostrar ? <Texto/> : null}
    </div>
  );
}

export default App;
