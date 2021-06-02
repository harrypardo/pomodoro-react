import React, { useEffect, useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(120);
    const [isCounting, setIsCounting] = useState(false);
    
    const onClickReset = () => {
        setCounter(120);
    }
    const onClickStart = () => {
        setIsCounting(true);
    }
    const onClickPause = () => {
        setIsCounting(false);
    }

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
        if (counter > 0 && isCounting) {
          timer = setTimeout(() => setCounter(c => c - 1), 1000);
        }
    
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
    }, [counter, isCounting]);


    const padTime = (time: number) => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
      };
      
    const format = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${padTime(seconds)}`;
      };

    return(<div>
        <h1> Counter </h1>
        <div>Countdown: {counter === 0 ? "Time over" : format(counter)}</div>
        <button type="button" onClick={onClickStart}>Start</button>
        <button type="button" onClick={onClickPause}>Pause</button>
        <button type="button" onClick={onClickReset}>Reset</button>
       </div>);
}


export default Counter;