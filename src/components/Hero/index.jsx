import { Box, Typography } from '@mui/material';
import StyledHero from './style';

const home = {
  box: {
    // backgroundColor: '#121212',
    color: '#4A4A4A',
  },
};

const Hero = () => (
  <StyledHero id='hero'>
    <Box
      style={home.box}
      fontSize={{ xs: 50, sm: 80 }}
      maxWidth={{ xs: 300, sm: 400 }}
      mx={{ xs: 'auto', sm: 'auto' }}
      p={{ xs: 1, sm: 2 }}
      borderRadius={{ sm: 2, lg: 3 }}
    >
      <Typography variant='h2'>
        Hey! <br />
        <span
          style={{
            fontWeight: 'bold',
            color: 'white',
            // webkitTextStroke: '.5px #da836a',
            WebkitTextStroke: '1.6px black',
          }}
          fontSize={{ xs: 50, sm: 100 }}
        >
          I'm Jordan,
        </span>{' '}
        <br />
        and I'm glad you're here
      </Typography>
    </Box>
  </StyledHero>
);

export default Hero;
