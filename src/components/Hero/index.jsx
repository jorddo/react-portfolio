import { Box, Typography } from '@mui/material';
import StyledHero from './style';
import Typewriter from 'typewriter-effect';

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
        and I'm glad you're here.
      </Typography>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('I enjoy<br> <strong>building</strong>')
            .pauseFor(1500)
            .deleteChars(8)
            .typeString('<strong>React</strong>')
            .pauseFor(1500)
            .deleteChars(5)
            .typeString('<strong>NodeJS</strong>')
            .pauseFor(1500)
            .deleteChars(6)
            .typeString('<strong>GraphQL</strong>')
            .pauseFor(1500)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </Box>
  </StyledHero>
);

export default Hero;
