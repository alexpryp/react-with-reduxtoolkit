import { useState, useRef } from "react";

export default function ReadLatestState() {
  const [text, setText] = useState("");
  const textRef = useRef("");

  function handleSend() {
    setTimeout(() => {
      //alert("Sending: " + text);
      alert("Sending: " + textRef.current);
    }, 3000);
  }

  return (
    <>
      <hr />
      <h2>Read latest state</h2>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
      />
      {/* <input
        value={textRef.current}
        onChange={(e) => (textRef.current = e.target.value)}
      />*/}
      <button onClick={handleSend}>Send</button>
    </>
  );
}
