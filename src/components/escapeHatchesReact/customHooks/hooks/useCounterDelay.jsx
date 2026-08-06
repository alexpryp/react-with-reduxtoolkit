import { useState } from 'react';

import { useInterval } from '@/components/escapeHatchesReact/customHooks/hooks/useInterval';

export function useCounterDelay(delay) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, delay);

  return count;
}
