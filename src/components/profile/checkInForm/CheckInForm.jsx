import { useState } from 'react';

export default function CheckInForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <hr/>
      <h2>Let's check you in</h2>
      <label>
        First name: {' '}
        <input
          name="First name"
          value={firstName}
        />
      </label><br/>
      <label>
        Last name: {' '}
        <input
          name="Last name"
          value={lastName}
        />
      </label>
      <p>
        Your ticket will be issued to:
      </p>
    </>
  );
}