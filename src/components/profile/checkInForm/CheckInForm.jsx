import { useState } from 'react';

export default function CheckInForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <hr/>
      <h2>Let's check you in</h2>
      <label>
        First name: {' '}
        <input
          name="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label><br/>
      <label>
        Last name: {' '}
        <input
          name="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}