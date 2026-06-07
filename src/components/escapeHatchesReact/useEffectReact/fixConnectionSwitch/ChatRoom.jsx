import { useEffect } from "react";

export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);

  return <h3>Welcome to the {roomId} room!</h3>;
}
