import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { PlayArrow, Pause, RotateLeft } from "@material-ui/icons";
import useSound from "use-sound";

import buttonClickSfx from "../../assets/sounds/button-click.mp3";
import tickSfx from "../../assets/sounds/tick.mp3";
import {
  StyledCard,
  StyledButton,
  StyledButtonContainer,
} from "./Counter.style";

const Counter = () => {
  const [counter, setCounter] = useState(1500);
  const [isCounting, setIsCounting] = useState(false);
  const [playButtonSFX] = useSound(buttonClickSfx);
  const [playTickSFX] = useSound(tickSfx);

  const onClickReset = () => {
    playButtonSFX();
    setCounter(1500);
    setIsCounting(false);
  };
  const onClickStart = () => {
    playButtonSFX();
    setIsCounting(true);
  };
  const onClickPause = () => {
    playButtonSFX();
    setIsCounting(false);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => "", 1000);
    if (counter > 0 && isCounting) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
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

  const renderClock = () => {
    return (
      <Typography variant="h2" component="h2" align="center">
        Countdown:
        {counter === 0 ? "Time over" : format(counter)}
      </Typography>
    );
  };

  return (
    <StyledCard>
      <div>{renderClock()}</div>
      <StyledButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          startIcon={<PlayArrow />}
          onClick={onClickStart}
        >
          Start
        </StyledButton>
        <StyledButton
          variant="contained"
          color="secondary"
          startIcon={<Pause />}
          onClick={onClickPause}
        >
          Pause
        </StyledButton>
        <StyledButton
          variant="contained"
          color="default"
          startIcon={<RotateLeft />}
          onClick={onClickReset}
        >
          Reset
        </StyledButton>
      </StyledButtonContainer>
    </StyledCard>
  );
};

export default Counter;
