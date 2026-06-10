import { useState, useEffect, useEffectEvent } from "react";

export default function FixDelay() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, delay);

    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  return (
    <>
      <hr />
      <h2>Fix a non-adjustable delay </h2>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Increment by:
        <button
          disabled={increment === 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          –
        </button>
        <b>{increment}</b>
        <button
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
      <p>
        Increment delay:
        <button
          disabled={delay === 100}
          onClick={() => {
            setDelay((d) => d - 100);
          }}
        >
          –100 ms
        </button>
        <b>{delay} ms</b>
        <button
          onClick={() => {
            setDelay((d) => d + 100);
          }}
        >
          +100 ms
        </button>
      </p>
    </>
  );
}
