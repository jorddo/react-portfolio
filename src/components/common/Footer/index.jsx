import { Container, Grid, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'static',
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Box
        // px={{ xs: 2, sm: 8 }}
        py={{ xs: 4, sm: 5 }}
        mx={{ xs: 2, sm: 5 }}
        bgcolor='primary.main'
        color='white'
      >
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={2}>
              <Box borderBottom={2}>Reach Out</Box>
              <Box>
                <Link
                  href='mailto:jordanbsneed@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  color='inherit'
                >
                  <EmailIcon></EmailIcon>
                </Link>
              </Box>
              <Box>
                <Link
                  href='https://github.com/jorddo'
                  target='_blank'
                  rel='noreferrer'
                  color='inherit'
                >
                  <GitHubIcon></GitHubIcon>
                </Link>
              </Box>
              <Box>
                <Link
                  href='https://www.linkedin.com/in/jordanbsneed/'
                  target='_blank'
                  rel='noreferrer'
                  color='inherit'
                >
                  <LinkedInIcon></LinkedInIcon>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign='center'>
            Made by Jordan &copy; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
