import { useState } from "react";

export default function DisappearingInputText() {
  const [showHint, setShowHint] = useState(false);

  return (
    <>
      <hr />
      <div>
        {showHint && (
          <p>
            <i>Hint: Your favorite city?</i>
          </p>
        )}
        <Form />
        <br />
        <button
          onClick={() => {
            setShowHint((showHint) => !showHint);
          }}
        >
          {showHint ? "Hide hint" : "Show hint"}
        </button>
      </div>
    </>
  );
}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
