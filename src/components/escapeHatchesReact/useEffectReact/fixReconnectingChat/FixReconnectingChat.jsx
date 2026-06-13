import { useState } from "react";
import ChatRoom from "@/components/escapeHatchesReact/useEffectReact/fixReconnectingChat/ChatRoom";
import "@/components/escapeHatchesReact/useEffectReact/fixReconnectingChat/styles.css";

export default function FixReconnectingChat() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  return (
    <>
      <hr />
      <h2>Fix a reconnecting chat </h2>
      <div className={isDark ? "dark" : "light"}>
        <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>
        <label>
          Server URL:{" "}
          <input
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
          />
        </label>
        <label>
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <ChatRoom options={options} />
      </div>
    </>
  );
}
