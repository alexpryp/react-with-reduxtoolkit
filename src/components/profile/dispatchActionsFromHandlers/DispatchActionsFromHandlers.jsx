import { useReducer } from "react";

import "@/components/profile/dispatchActionsFromHandlers/styles.css";

import ContactList from "@/components/profile/dispatchActionsFromHandlers/ContactList";
import Chat from "@/components/profile/dispatchActionsFromHandlers/Chat";
import { messengerReducer } from "@/components/profile/dispatchActionsFromHandlers/messengerReducer";

export default function DispatchActionsFromHandlers() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const message = state.contacts[state.selectedId].message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  console.log(state);

  return (
    <>
      <hr />
      <div>
        <ContactList
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Chat
          key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com", message: "" },
  { id: 1, name: "Alice", email: "alice@mail.com", message: "" },
  { id: 2, name: "Bob", email: "bob@mail.com", message: "" },
];

const initialState = {
  selectedId: 0,
  contacts: contacts,
};
