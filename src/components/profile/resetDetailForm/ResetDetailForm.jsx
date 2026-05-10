import { useState } from "react";
import ContactList from "@/components/profile/resetDetailForm/ContactList";
import EditContact from "@/components/profile/resetDetailForm/EditContact";

export default function ResetDetailForm() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedDate) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updated.id) {
        return updatedDate;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <>
      <hr />
      <div style={{ border: "1px solid #ffffff", padding: "10px" }}>
        HELLO!
        <ContactList
          contacts={contacts}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id)}
        />
        <hr />
        <EditContact initialData={selectedContact} onSave={handleSave} />
      </div>
    </>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
