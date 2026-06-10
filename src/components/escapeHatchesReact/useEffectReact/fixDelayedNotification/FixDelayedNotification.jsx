import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";
import { ToastContainer, toast } from "react-toastify";

const serverUrl = "https://localhost:1234";

const Msg = ({ closeToast, data }) => (
  <div>
    {`Welcome to the ${data.roomId} room!`}
    <button onClick={closeToast}>Close</button>
  </div>
);

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);

    connection.on("connected", () => {
      setTimeout(() => {
        toast.success(Msg, {
          className: "black-background",
          progressClassName: "fancy-progress-bar",
          data: { roomId: roomId },
        });
      }, 2000);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h3>Welcome to the {roomId} room!</h3>;
}

export default function FixDelayedNotification() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <hr />
      <h2>Fix a delayed notification</h2>
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
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
      <ToastContainer theme={isDark ? "dark" : "light"} />
    </>
  );
}
