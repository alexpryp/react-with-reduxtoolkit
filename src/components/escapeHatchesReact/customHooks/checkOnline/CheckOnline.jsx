import useOnlineStatus from '@/components/escapeHatchesReact/customHooks/hooks/useOnlineStatus';

export default function CheckOnline() {
  const isOnline = useOnlineStatus();

  return (
    <>
      <hr></hr>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </>
  )
}
