import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {}}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
