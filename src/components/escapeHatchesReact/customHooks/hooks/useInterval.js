import { useEffect } from 'react';

export function useInterval(setCount, delay) {
  useEffect(() => {
    const id = setInterval(() => {
      setCount();
    }, delay);

    return () => clearInterval(id);
  }, [setCount, delay]);
}
