import { useState, useEffect, useRef } from "react";

export default function SwitchSynchronization() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleMove(e) {
      if (canMove) {
        setPosition({ x: e.offsetX, y: e.offsetY });
      }
    }

    const myRef = containerRef.current;

    myRef.addEventListener("pointermove", handleMove);

    return () => myRef.removeEventListener("pointermove", handleMove);
  }, [canMove]);

  return (
    <>
      <hr />
      <h2>Switch synchronization on and off </h2>
      <label>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          border: "1px solid red",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "pink",
            borderRadius: "50%",
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            zIndex: 999,
          }}
        />
      </div>
    </>
  );
}
