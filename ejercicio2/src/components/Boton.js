import React from 'react';
import '../styles/Boton.css'
function Boton({text, funClick, color}){
    const estilo={
        backgroundColor: color,
    };
    return(
        <div >
            <button className='boton' style={estilo} onClick={funClick}>{text}</button>
        </div>
    );
}
export default Boton;