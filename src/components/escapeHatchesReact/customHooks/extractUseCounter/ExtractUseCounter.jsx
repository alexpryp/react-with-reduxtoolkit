import { useCounter } from '@/components/escapeHatchesReact/customHooks/hooks/useCounter';

export default function ExtractUseCounter() {
  const count = useCounter();

  return (
    <>
      <hr />
      <h2>Extract a useCounter Hook </h2>
      <h2>Seconds passed: {count}</h2>
    </>
  );
}
