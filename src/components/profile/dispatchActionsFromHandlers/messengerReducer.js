export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        //message: action.message,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.contactId) {
            return {
              ...contact,
              message: action.message,
            };
          } else {
            return contact;
          }
        }),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
