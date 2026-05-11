export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <section>
      <ul style={{ "list-style-type": "none" }}>
        {contacts.map((contact) => (
          <li key={contact.id} style={{ display: "inline-block" }}>
            <button
              onCLick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
