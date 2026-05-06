import { useState } from "react";
import { letters } from "@/components/profile/multipleSelection/data";
import Letter from "@/components/profile/multipleSelection/Letter";

import "./styles.css";

export default function MultipleSelection() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedCount = 1;

  function handleToggle(toggledId) {
    setSelectedId(toggledId);
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
            isSelected={letter.id === selectedId}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
