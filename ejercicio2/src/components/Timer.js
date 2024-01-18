import React from 'react';
import '../styles/Timer.css'
function Timer({mins, segs}){
    return(
        <div >
            <span className='Timer'>{mins} mins</span>
            <span className='Timer'> {segs} seg</span>
        </div>
    );
}
export default Timer;