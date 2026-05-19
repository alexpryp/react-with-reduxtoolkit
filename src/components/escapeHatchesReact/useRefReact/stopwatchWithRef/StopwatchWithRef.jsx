import { useState, useRef } from "react";

export default function StopwatchWithRef() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const ref = useRef(0);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;

    if (secondsPassed > 30) {
      setStartTime(null);
      setNow(null);
      ref.current = 0;
    }
  }

  return (
    <>
      <hr />
      <h2>Stopwatch</h2>
      <h2>Time passed: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
    </>
  );
}
