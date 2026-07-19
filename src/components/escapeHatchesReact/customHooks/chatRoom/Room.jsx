import { useState } from 'react';

import { useChatRoom } from '@/components/escapeHatchesReact/customHooks/hooks/useChatRoom';

export default function Room({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });

  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h2>Welcome to the {roomId} room!</h2>
    </>
  );
}
