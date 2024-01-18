import React from 'react';
import '../styles/Texto.css'
function Texto({cont, time}){
    return(
        <div className='text-container'>
            <h1>{cont}</h1>
            <h3>Time left: {time} Seconds</h3>
        </div>
    );
}
export default Texto;