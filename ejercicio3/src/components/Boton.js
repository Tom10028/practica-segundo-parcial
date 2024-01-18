import React from "react";
import '../styles/Boton.css'
function Boton({funClick}){
    return(
        <div>
            <button className="boton" onClick={funClick}> 
                +
            </button>
        </div>

    );
}
export default Boton;