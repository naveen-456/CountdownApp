

import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [countdown, setCountdown] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setCountdown(time);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="countdown">
      <h1 className='Heading'>Your Countdown Starts Here</h1>
      <h1 className='time'>{formatTime(countdown)}</h1>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startCountdown}>Start</button>
        ) : (
          <button onClick={stopCountdown}>Stop</button>
        )}
        <button onClick={resetCountdown}>Reset</button>
      </div>
    </div>
  );
};

export default Countdown;
