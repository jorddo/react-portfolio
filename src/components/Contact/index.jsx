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

  const contactPattern =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M41 37.59V25h-2v12.59l-8.9-8.9-1.41 1.41 8.9 8.9H25v2h12.59l-8.9 8.9 1.41 1.41 8.9-8.9V55h2V42.41l8.9 8.9 1.41-1.41-8.9-8.9H55v-2H42.41l8.9-8.9-1.41-1.41-8.9 8.9zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM5 1h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM5 5h70v70H5V5zm2 68h66V7H7v66zM9 9h62v62H9V9zm2 60h58V11H11v58zm2-39.6V13h16.4A29.1 29.1 0 0 0 13 29.4zM15 15v6.67A31.17 31.17 0 0 1 21.67 15H15zm-2 52V50.6A29.1 29.1 0 0 0 29.4 67H13zm2-8.67V65h6.67A31.17 31.17 0 0 1 15 58.33zM67 67H50.6A29.1 29.1 0 0 0 67 50.6V67zm-8.67-2H65v-6.67A31.17 31.17 0 0 1 58.33 65zM67 13v16.4A29.1 29.1 0 0 0 50.6 13H67zm-2 8.67V15h-6.67A31.17 31.17 0 0 1 65 21.67zM39 13h2v2h-2v-2zm7.02.66l1.93.52-.51 1.93-1.94-.52.52-1.93zm6.61 2.46l1.74 1-1 1.73-1.74-1 1-1.73zm5.75 4.08l1.42 1.42-1.42 1.4-1.4-1.4 1.4-1.42zm4.5 5.43l1 1.74-1.73 1-1-1.74 1.73-1zm2.94 6.42l.52 1.93-1.93.52-.52-1.94 1.93-.51zM67 39v2h-2v-2h2zm-.66 7.02l-.52 1.93-1.93-.51.52-1.94 1.93.52zm-2.46 6.61l-1 1.74-1.73-1 1-1.74 1.73 1zm-4.08 5.75l-1.42 1.42-1.4-1.42 1.4-1.4 1.42 1.4zm-5.43 4.5l-1.74 1-1-1.73 1.74-1 1 1.73zM41 67h-2v-2h2v2zm6.95-1.18l-1.93.52-.52-1.93 1.94-.52.51 1.93zm-13.97.52l-1.93-.52.51-1.93 1.94.52-.52 1.93zm-6.61-2.46l-1.74-1 1-1.73 1.74 1-1 1.73zm-5.75-4.08l-1.42-1.42 1.42-1.4 1.4 1.4-1.4 1.42zm-4.5-5.43l-1-1.74 1.73-1 1 1.74-1.73 1zm-2.94-6.42l-.52-1.93 1.93-.52.52 1.94-1.93.51zM13 41v-2h2v2h-2zm.66-7.02l.52-1.93 1.93.51-.52 1.94-1.93-.52zm2.46-6.61l1-1.74 1.73 1-1 1.74-1.73-1zm4.08-5.75l1.42-1.42 1.4 1.42-1.4 1.4-1.42-1.4zm5.43-4.5l1.74-1 1 1.73-1.74 1-1-1.73zm6.42-2.94l1.93-.52.52 1.93-1.94.52-.51-1.93zM40 63a23 23 0 1 1 0-46 23 23 0 0 1 0 46zm0-2a21 21 0 1 0 0-42 21 21 0 0 0 0 42zm0-2a19 19 0 1 1 0-38 19 19 0 0 1 0 38zm0-2a17 17 0 1 0 0-34 17 17 0 0 0 0 34z'/%3E%3C/g%3E%3C/svg%3E";
  return (
    <Section id='contact' pattern={contactPattern}>
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
              variant='filled'
              name='name'
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='email'
              label='Email'
              variant='filled'
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
              variant='filled'
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
