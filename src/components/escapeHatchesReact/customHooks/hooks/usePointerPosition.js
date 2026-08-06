import { useState, useEffect } from 'react';

export function usePointerPosition(canvas) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const rect = canvas.current.getBoundingClientRect();

    const canvasRef = canvas.current;
    function handleMove(e) {
      //console.log({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    canvasRef.addEventListener('pointermove', handleMove);

    return () => canvasRef.removeEventListener('pointermove', handleMove);
  }, [canvas]);

  return position;
}
