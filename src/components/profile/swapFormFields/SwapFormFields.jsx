import { useState } from "react";

export default function SwapFormFields() {
  const [reverse, setReverse] = useState(false);

  const checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <hr />
        <Field key="Last name" label="Last name" />
        <Field key="First name" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <hr />
        <Field key="First name" label="First name" />
        <Field key="Last name" label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
