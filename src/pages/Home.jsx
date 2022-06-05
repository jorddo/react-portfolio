import { Box, Typography } from '@mui/material';

const home = {
  box: {
    backgroundColor: '#121212',
    color: 'white',
  },
};

const HomePage = () => {
  return (
    <div>
      <Box
        style={home.box}
        fontSize={{ xs: 50, sm: 80 }}
        maxWidth={{ xs: 300, sm: 400 }}
        mx={{ xs: 'auto', sm: 'auto' }}
        my={{ xs: 10, sm: 5 }}
        p={{ xs: 1, sm: 2 }}
        borderRadius={{ lg: 2 }}
      >
        <Typography variant='h2'>
          Hi! <br />
          <span
            style={{
              fontWeight: 'bold',
              color: 'black',
              // webkitTextStroke: '.5px #da836a',
              webkitTextStroke: '.3px white',
            }}
            fontSize={{ xs: 50, sm: 100 }}
          >
            I'm Jordan,
          </span>{' '}
          <br />
          and I'm glad you're here
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;
