import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "@/components/escapeHatchesReact/useEffectReact/fixEncriptedChat/chat.js";

const Msg = ({ closeToast, data }) => (
  <div>
    {`New message: ${data.msg}`}
    <button onClick={closeToast}>Close</button>
  </div>
);

export default function ChatRoom({
  roomId,
  isEncrypted,
}) {

  useEffect(() => {
    function createConnection() {
      const options = {
        serverUrl: "https://localhost:1234",
        roomId: roomId,
      };
      if (isEncrypted) {
        return createEncryptedConnection(options);
      } else {
        return createUnencryptedConnection(options);
      }
    }

    const connection = createConnection();

    connection.on("message", (msg) => {
        toast.success(Msg, {
          className: "black-background",
          progressClassName: "fancy-progress-bar",
          data: { msg: msg },
        });
    })

    connection.connect();

    return () => connection.disconnect();
  }, [isEncrypted, roomId]);

  return <h3>Welcome to the {roomId} room!</h3>;
}
