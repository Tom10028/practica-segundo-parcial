import React from 'react';
import '../styles/Boton.css'
function Boton({funCLick}){
    

    return(
        <div >
            <button className='Boton' onClick={funCLick}>
                Show/hide
            </button>
        </div>

    );   
}
export default Boton;