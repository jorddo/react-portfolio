import { Box, Typography } from '@mui/material';
import StyledHero from './style';

const home = {
  box: {
    // backgroundColor: '#121212',
    color: 'white',
  },
};

const Hero = () => (
  <StyledHero>
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
            color: 'black',
            // webkitTextStroke: '.5px #da836a',
            WebkitTextStroke: '.3px white',
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
