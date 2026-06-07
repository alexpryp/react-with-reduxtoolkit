import { useState } from "react";
import ChatRoom from "@/components/escapeHatchesReact/useEffectReact/fixConnectionSwitch/ChatRoom";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "@/components/escapeHatchesReact/useEffectReact/fixConnectionSwitch/chat";

export default function FixConnectionSwitch() {
  const [roomId, setRoomId] = useState("general");
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <hr />
      <h2>Fix a connection switch</h2>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <ChatRoom
        roomId={roomId}
        createConnection={
          isEncrypted ? createEncryptedConnection : createUnencryptedConnection
        }
      />
    </>
  );
}
