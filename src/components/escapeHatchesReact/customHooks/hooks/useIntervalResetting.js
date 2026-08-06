import { useEffect } from 'react';
import { useEffectEvent } from 'react';

export function useIntervalResetting(onTick, delay) {
  const toOnTick = useEffectEvent(onTick);

  useEffect(() => {
    const id = setInterval(toOnTick, delay);
    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
}
