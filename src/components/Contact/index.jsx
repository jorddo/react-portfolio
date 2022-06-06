import { TextField, Button } from '@mui/material';
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <input type='hidden' name='form-name' value='contact' />
        <TextField
          label='Name'
          variant='outlined'
          size='small'
          name='name'
          required
          value={name}
          onChange={handleChange}
          type='text'
        />
        <TextField
          label='Email'
          variant='outlined'
          size='small'
          name='email'
          type='email'
          required
          value={email}
          onChange={handleChange}
        />
        <TextField
          label='Message'
          variant='outlined'
          rows={4}
          multiline
          value={message}
          onChange={handleChange}
          name='message'
        />
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </form>
    </section>
  );
}

export default ContactForm;
