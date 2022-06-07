import { TextField } from '@mui/material';
import React, { useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  return (
    <section id='contact'>
      <h1>Contact Me</h1>
      <form name='contact' method='post'>
        <input type='hidden' name='contact' value='contact' />
        <TextField
          id='name'
          label='Name'
          variant='outlined'
          name='name'
          value={name}
          onChange={(e) => handleChange(e)}
        />

        <TextField
          id='email'
          label='Email'
          variant='outlined'
          name='email'
          value={email}
          type='email'
          onChange={(e) => handleChange(e)}
        />

        <TextField
          id='message'
          label='Message'
          variant='outlined'
          name='message'
          value={message}
          multiline
          rows={4}
          onChange={(e) => handleChange(e)}
        />
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </section>
  );
}

export default ContactForm;
