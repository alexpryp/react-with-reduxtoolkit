import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

import { createConnection } from '@/components/escapeHatchesReact/customHooks/chatRoom/chat';

const Msg = ({ closeToast, data }) => (
  <div>
    {`New message: ${data.msg}`}
    <button onClick={closeToast}>Close</button>
  </div>
);

export default function Room({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };

    const connection = createConnection(options);

    connection.on('message', (msg) => {
      toast.success(Msg, {
        className: "black-background",
        progressClassName: "fancy-progress-bar",
        data: { msg: msg },
      });
      // showNotification('New message: ' + msg);
    });

    connection.connect();

    return () => connection.disconnect();
  }, [roomId, serverUrl]);

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
