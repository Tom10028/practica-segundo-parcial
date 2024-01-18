import Boton from './components/Boton';
import React, {useState} from 'react';
import './App.css';
import Texto from './components/Texto';
function App() {
  const [contador, setContador]=useState(0);
  const[tiempo,setTiempo]=useState(10);
  const id=React.useRef(null);

  const click=()=>{
    setContador((c) => c+1);
  }

  const clear = ()=>{
    window.clearInterval(id.current)
  }

  React.useEffect(()=>{
    id.current=window.setInterval(()=>{
      setTiempo((tiempo)=>tiempo-1)
  },1000)
  return clear
    },[]);
  
  React.useEffect(()=>{
    if(tiempo ===0){
      clear()
    }
  }, [tiempo]);  

  return(
    <div className='App'>
      <Texto cont={contador} time={tiempo}/>
      {tiempo === 0 ? null : <Boton funClick={click}/>}
      
    </div>
  );
}
export default App;
