import { useState } from 'react';
import { useCounterDelay } from '@/components/escapeHatchesReact/customHooks/hooks/useCounterDelay';

export default function MakeCounterDelay() {
  const [delay, setDelay] = useState(1000);
  const count = useCounterDelay(delay);

  return (
    <>
      <hr />
      <h2>Make the counter delay configurable </h2>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={e => setDelay(Number(e.target.value))}
          />
      </label>
      <h2>Ticks: {count}</h2>
    </>
  );
}
