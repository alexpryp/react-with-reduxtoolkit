import useOnlineStatus from '@/components/escapeHatchesReact/customHooks/hooks/useOnlineStatus';

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <>
      <hr></hr>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
    </>
  );
}
