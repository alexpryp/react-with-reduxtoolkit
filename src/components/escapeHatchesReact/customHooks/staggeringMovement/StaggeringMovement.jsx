import { useRef, useEffect, useState } from 'react';
import { usePointerPosition } from '@/components/escapeHatchesReact/customHooks/hooks/usePointerPosition';

function useDelayedValue(value, delay) {
  const [coords, setCoords] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setCoords(value);
    }, delay);
  }, [value, delay]);

  return coords;
}

export default function StaggeringMovement() {
  const canvas = useRef();

  const pos1 = usePointerPosition(canvas);
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);

  return (
    <>
      <hr />
      <div ref={canvas} style={{
        position: 'relative',
        width: '600px',
        height: '400px',
        backgroundColor: 'white',
      }}>
        <Dot position={pos1} opacity={1} />
        <Dot position={pos2} opacity={0.8} />
        <Dot position={pos3} opacity={0.6} />
        <Dot position={pos4} opacity={0.4} />
        <Dot position={pos5} opacity={0.2} />
      </div>
    </>
  );

}

function Dot({ position, opacity }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}
