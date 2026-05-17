export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
            contactId: contact.id,
          });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          alert(`Message to ${contact.email}: ${message}`);
          dispatch({
            type: "edited_message",
            message: "",
            contactId: contact.id,
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
