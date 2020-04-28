import React, { useState, useRef } from "react";

export function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);
  const timerInterval = useRef();

  const onStart = () => {
    if (timerInterval.current) return;

    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);
  };

  const onStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const onReset = () => {
    setTimer(0);
  };

  const onLap = () => {
    setTimes([...times, timer]);
    setTimer(0);
  };

  return (
    <div>
      <div>{timer}</div>
      <div>
        <button onClick={onStart}>START</button>
        <button onClick={onStop}>STOP</button>
        <button onClick={onLap}>LAP</button>
        <button onClick={onReset}>RESET</button>
      </div>
      <div>
        {times.map((time, index) => (
          <div key={index}>{time}</div>
        ))}
      </div>
    </div>
  );
}
