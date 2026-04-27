export default function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {
  return (
    <section className="contact-list">
      <ul style={{padding: '0px'}}>
        {contacts.map(contact => 
          <li
            key={contact.email}
            style={{listStyleType: 'none', margin: '5px 0px'}}
          >
            <button onClick={() => {
              onSelect(contact);
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
