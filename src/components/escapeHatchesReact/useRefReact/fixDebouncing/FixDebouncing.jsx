import { useRef } from "react";

// let timeoutID;

function DebouncedButton({ onClick, children }) {
  const timeoutRef = useRef(null);

  return (
    <button
      onClick={() => {
        //clearTimeout(timeoutID);
        clearTimeout(timeoutRef.current);

        //timeoutID = setTimeout(() => {
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function FixDebouncing() {
  return (
    <>
      <hr />
      <h2>Fix debouncing dashboard</h2>
      <DebouncedButton onClick={() => alert("Spaceship launched!")}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Soup boiled!")}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby sung!")}>
        Sing a lullaby
      </DebouncedButton>
    </>
  );
}
