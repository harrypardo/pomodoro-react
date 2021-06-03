import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
import useSound from 'use-sound';

import buttonClickSfx from '../assets/sounds/button-click.mp3';
import tickSfx from '../assets/sounds/tick.mp3';

const Counter = () => {
    const [counter, setCounter] = useState(1500);
    const [isCounting, setIsCounting] = useState(false);
    const [playButtonSFX] = useSound(buttonClickSfx);
    const [playTickSFX] = useSound(tickSfx);
    
    const onClickReset = () => {
      playButtonSFX();
        setCounter(1500);
        setIsCounting(false);
    }
    const onClickStart = () => {
      playButtonSFX();
        setIsCounting(true);
    }
    const onClickPause = () => {
      playButtonSFX();
        setIsCounting(false);
    }

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
        if (counter > 0 && isCounting) {
          timer = setTimeout(() => setCounter(c => c - 1), 1000);
          playTickSFX();
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

    return(<Container maxWidth="sm">
        <h1> Counter </h1>
        <div>Countdown: {counter === 0 ? "Time over" : format(counter)}</div>
        <button type="button" onClick={onClickStart}>Start</button>
        <button type="button" onClick={onClickPause}>Pause</button>
        <button type="button" onClick={onClickReset}>Reset</button>
       </Container>);
}


export default Counter;