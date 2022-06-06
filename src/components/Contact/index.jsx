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
        {/* <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            defaultValue={name}
            onChange={handleChange}
            name='name'
          />
        </div> */}
        <TextField
          label='Name'
          variant='outlined'
          size='small'
          name='name'
          required
          value={name}
          onChange={handleChange}
        />
        {/* <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            defaultValue={email}
            name='email'
            onChange={handleChange}
          />
        </div> */}
        <TextField
          label='Email'
          variant='outlined'
          size='small'
          name='email'
          required
          value={email}
          onChange={handleChange}
        />
        {/* <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            defaultValue={message}
            onChange={handleChange}
            rows='5'
          />
        </div> */}
        <TextField
          label='Message'
          variant='outlined'
          rows={4}
          multiline
          value={message}
          onChange={handleChange}
        />
        <Button variant='contained'>Submit</Button>
      </form>
    </section>
  );
}

export default ContactForm;
