import { useState } from "react";
import { letters } from "@/components/profile/multipleSelection/data";
import Letter from "@/components/profile/multipleSelection/Letter";

import "./styles.css";

export default function MultipleSelection() {
  const [selectedId, setSelectedId] = useState([0]);

  function handleToggle(toggledId) {
    setSelectedId((selectedId) => {
      if (selectedId.includes(toggledId)) {
        return selectedId.filter((id) => id !== toggledId);
      }

      return [...selectedId, toggledId];
    });
  }

  return (
    <>
      <hr />
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedId.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedId.length} letters</b>
        </p>
      </ul>
    </>
  );
}
