import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');

  return (
    <section className="chat" style={{margin: '16px'}}>
      <textarea
        name="chat"
        id="chat1"
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
        style={{minHeight: '72px', minWidth: '250px'}}
      />
      <br />
      <button style={{margin: '5px 0px'}}>
        Send to {contact.email}
      </button>
    </section>
  )
}