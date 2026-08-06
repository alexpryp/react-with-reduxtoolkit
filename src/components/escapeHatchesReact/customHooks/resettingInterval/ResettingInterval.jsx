import { useRef } from 'react';

import { useCounterDelay } from '@/components/escapeHatchesReact/customHooks/hooks/useCounterDelay';
import { useIntervalResetting } from '@/components/escapeHatchesReact/customHooks/hooks/useIntervalResetting';

export default function ResettingInterval() {
  const header = useRef();
  const count = useCounterDelay(1000);

  useIntervalResetting(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    header.current.style.backgroundColor = randomColor;
  }, 2000);

  return (
    <>
      <hr />
      <div
        ref={header}
        style={{
          padding: '5px 20px',
          borderRadius: '10px',
          backgroundColor: 'red'
        }}
      >
        <h2 className='coloredHeader'>Seconds passed: {count}</h2>
      </div>
    </>
  );
}
