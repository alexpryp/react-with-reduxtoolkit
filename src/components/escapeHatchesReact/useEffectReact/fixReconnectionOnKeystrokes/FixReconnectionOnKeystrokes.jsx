import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h3>Welcome to the {roomId} room!</h3>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}

export default function FixReconnectionOnKeystrokes() {
  const [roomId, setRoomId] = useState("general");

  return (
    <>
      <hr />
      <h2>Fix reconnection on every key strokes</h2>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <ChatRoom roomId={roomId} />
    </>
  );
}
