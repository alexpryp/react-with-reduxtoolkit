import { useState } from 'react';

export default function Form2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <label>
        First name:{' '}
        <input
         type="text"
         value={firstName}
         onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <br />
      <label>
        Last name:{' '}
        <input
         type="text"
         value={lastName}
         onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{firstName + ' ' + lastName}</b>
      </p>
      <hr />
    </>
  )
}