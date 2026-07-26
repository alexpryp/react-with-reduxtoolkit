import { useState } from 'react';
import { ToastContainer } from "react-toastify";

import Room from '@/components/escapeHatchesReact/customHooks/chatRoom/Room';

export default function ChatRoom() {
  const [roomId, setRoomId] = useState('general');

  return (
    <>
      <hr/>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value='general'>general</option>
          <option value='travel'>travel</option>
          <option value='music'>music</option>
        </select>
      </label>
      <Room roomId={roomId} />
      <ToastContainer theme={"dark"} />
    </>
  )
}
