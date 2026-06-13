import { useEffect } from "react";
import { createConnection } from "@/components/escapeHatchesReact/useEffectReact/fixReconnectingChat/chat";

export default function ChatRoom({ options }) {
  const { serverUrl, roomId } = options;

  useEffect(() => {
    const connection = createConnection({ serverUrl, roomId });
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h3>Welcome to the {options.roomId} room!</h3>;
}
