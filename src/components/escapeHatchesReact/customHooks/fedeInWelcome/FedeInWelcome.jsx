import { useState, useRef } from 'react';

import { useFadeIn } from '@/components/escapeHatchesReact/customHooks/hooks/useFadeIn';
import '@/components/escapeHatchesReact/customHooks/fedeInWelcome/styles.css';

function Welcome() {
  const ref = useRef(null);

  useFadeIn(ref, 1000);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
}

export default function FedeInWelcome() {
  const [show, setShow] = useState(false);

  return (
    <>
      <hr />
      <h2>Fade-in Welcome message</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      {show && <Welcome />}
    </>
  );
}
