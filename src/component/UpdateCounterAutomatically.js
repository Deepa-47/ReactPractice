import React, { useState } from "react";

export default function UpdateCounterAutomatically(){
    let [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const Increament = () => {
    const newIntervalId = setInterval(() => {
      setCount(count++);
    }, 1000);
    setIntervalId(newIntervalId);
  };
  const Pause = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };
  const Decreament = () => {
    const newIntervalId = setInterval(() => {
      setCount(--count);
    }, 1000);
    setIntervalId(newIntervalId);
  };
  return (
    <>
      <div>
        <label>{count}</label>
      </div>
      <div>
        <button onClick={Increament}>Increament</button>
        <button onClick={Pause}>Pause</button>
        <button onClick={Decreament}>Decreament</button>
      </div>
    </>
  );
}