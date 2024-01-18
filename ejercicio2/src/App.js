
import React, {useState} from 'react';
import './App.css';
import Boton from './components/Boton';
import Timer from './components/Timer';
function App() {
  const[time, setTime]=useState(0);

  const clickStart=()=>{
    window.myTimer=setInterval(()=>{
      setTime((time)=>time+1);
    }, 1000);
  }
  
  const clickStop=()=>{
    clearInterval(window.myTimer);
    console.log("stop")
  }

  const clickReset=()=>{
    clearInterval(window.myTimer);
    setTime(0);
  }
  return (
    <div className="App">
      <h1>Timer</h1>
      
      <Timer mins={Math.trunc(time/60)} segs={time %60} />
      <div className='box-button'>
        <Boton color={"green"} funClick={clickStart} text={"Start"} />
        <Boton color={"red"} funClick={clickStop} text={"Stop"}/>
        <Boton color={"Yellow"} funClick={clickReset} text={"Reset"}/>
      </div>
    </div>
  );
}

export default App;
