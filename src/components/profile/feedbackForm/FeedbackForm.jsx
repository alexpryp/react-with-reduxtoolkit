import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(text);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <>
      <hr />
      <h1>Feedback form</h1>
      <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          name="textarea"
          disabled={isSending}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <br />
        <button
          disabled={isSending}
          type="submit"
        >
          Send
        </button>
        {isSending && <p>Sending...</p>}
      </form>
    </>
  );
}

function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}