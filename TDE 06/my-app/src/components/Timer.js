import { useState,useEffect } from "react";
import './Timer.css'

const Timer = () => {

    const [seconds,setSeconds] = useState(0)

     useEffect(()=>{
        setInterval(() => {
            setSeconds(seconds + 1)
        }, 1000)
     },[seconds] )
    
    return (
        <div className="color">

            {seconds}
        </div>
    );
}

export default Timer;