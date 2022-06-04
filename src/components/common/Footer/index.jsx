import { Container, Grid, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
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
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Reach Out</Box>
              <Box>
                <Link
                  href='mailto:jordanbsneed@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  color='inherit'
                >
                  Email
                </Link>
              </Box>
              <Box>
                <Link
                  href='https://github.com/jorddo'
                  target='_blank'
                  rel='noreferrer'
                  color='inherit'
                >
                  Github
                  {/* <CardMedia
                    component='img'
                    height='100%'
                    width='100%'
                    image={require('../../../assets/github.png')}
                    alt='github'
                  ></CardMedia> */}
                </Link>
              </Box>
              <Box>
                <Link
                  href='https://www.linkedin.com/in/jordanbsneed/'
                  target='_blank'
                  rel='noreferrer'
                  color='inherit'
                >
                  LinkedIn
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
