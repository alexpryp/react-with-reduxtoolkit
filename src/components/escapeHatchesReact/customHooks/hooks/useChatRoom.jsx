import { useEffect } from 'react';
import { toast } from "react-toastify";

import { createConnection } from '@/components/escapeHatchesReact/customHooks/chatRoom/chat';

const message = ({ closeToast, data }) => (
  <div>
    {`New message: ${data.msg}`}
    <button onClick={closeToast}>Close</button>
  </div>
);

export function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };

    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      toast.success(message, {
        className: "black-background",
        progressClassName: "fancy-progress-bar",
        data: { msg: msg },
      })
    });

    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
