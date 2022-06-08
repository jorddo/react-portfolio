import { Grid, TextField, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Section from '../common/Section';

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
    <Section id='contact'>
      <Typography variant='h2'>Contact Me</Typography>
      {success && <p style={{ color: 'white' }}>Thank you for your message!</p>}
      <form
        name='contact'
        method='post'
        action='#contact/?success=true'
        data-netlify='true'
      >
        <input type='hidden' name='form-name' value='contact' />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='name'
              label='Name'
              variant='outlined'
              name='name'
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              name='email'
              value={email}
              type='email'
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='message'
              label='Message'
              variant='outlined'
              name='message'
              value={message}
              multiline
              rows={4}
              sx={{ m: 0, p: 0 }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Button variant='contained' type='submit'>
                Send
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Section>
  );
}

export default ContactForm;
