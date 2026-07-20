import { useState } from 'react';
import { toast } from "react-toastify";

import { useChatRoom } from '@/components/escapeHatchesReact/customHooks/hooks/useChatRoom';

const message = ({ closeToast, data }) => (
  <div>
    {`New message: ${data.msg}`}
    <button onClick={closeToast}>Close</button>
  </div>
);

export default function Room({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
    onReceiveMessage(msg) {
      toast.success(message, {
        className: "black-background",
        progressClassName: "fancy-progress-bar",
        data: { msg: msg },
      })
    }
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
