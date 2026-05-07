import { useState } from "react";

export default function DisappearingInputText() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form />
        <br />
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      </div>
    );
  }
  return (
    <>
      <hr />
      <div>
        <Form />
        <br />
        <button
          onClick={() => {
            setShowHint(true);
          }}
        >
          Show hint
        </button>
      </div>
    </>
  );
}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
