import { TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('succes=true')) {
      setSuccess(true);
    }
  }, []);

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
      {success && <p style={{ color: 'white' }}>Thank you for your message!</p>}
      <form
        name='contact'
        method='post'
        action='#contact/?success=true'
        data-netlify='true'
      >
        <input type='hidden' name='form-name' value='contact' />
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
          <Button variant='contained' type='submit'>
            Send
          </Button>
        </p>
      </form>
    </section>
  );
}

export default ContactForm;
