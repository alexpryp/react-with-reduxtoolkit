import { useOnlineStatus2 } from "@/components/escapeHatchesReact/customHooks/hooks/useOnlineStatus2";

function StatusBar() {
  const isOnline = useOnlineStatus2();

  return <h2>{isOnline ? '✅ Online' : '❌ Disconnected'}</h2>;
}

function SaveButton() {
  const isOnline = useOnlineStatus2();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function OnlineStatus() {
  return (
    <>
      <hr />
      <h2>Custom Hooks help you migrate to better patterns </h2>
      <SaveButton />
      <StatusBar />
    </>
  );
}
