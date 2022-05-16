import { useRef, useState,useEffect } from "react"


export const Counter = () => {

    const [counter, setCounter] = useState(0);
    const timerRef=useRef(null);
    // let timerRef;
    const [started, setStarted] = useState(false);

    const StartCounter = () => {
        if (started)
            return;
        setStarted(true);
        timerRef.current= setInterval(() => {
            setCounter((prev) => prev + 1)
            // console.log(timerRef.current);
        }, 500);
    }

    // console.log("Start");

    // useEffect(() => {
        
    //     console.log("first");
    
    // }, [])

    // useEffect(() => {
   
    //   console.log("second");
    // }, [started])

    // console.log("end");

    return (
        <div>
            <h2>counter:{counter}</h2>
     
            <button onClick={()=>{StartCounter()}}>start</button>
            <button onClick={() => {
                console.log(timerRef.current);
                setStarted(false);
                clearInterval(timerRef.current);
            }}>pause</button>
            <button onClick={() => {
                setCounter(0);
                setStarted(false);
                clearInterval(timerRef.current)
            }}>reset</button>
            
        </div>
    )
}


