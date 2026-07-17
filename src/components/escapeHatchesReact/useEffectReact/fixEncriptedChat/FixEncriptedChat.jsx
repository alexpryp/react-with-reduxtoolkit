import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ChatRoom from "@/components/escapeHatchesReact/useEffectReact/fixEncriptedChat/ChatRoom.jsx";

export default function FixEncriptedChat() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <hr />
      <h2>Fix a reconnecting chat, again</h2>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <ChatRoom
        roomId={roomId}
        isEncrypted={isEncrypted}
      />
      <ToastContainer theme={isDark ? "dark" : "light"} />
    </>
  );
}
