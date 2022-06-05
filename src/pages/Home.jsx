import { Box, Typography } from '@mui/material';

const home = {
  box: {
    backgroundColor: '#121212',
    color: 'white',
    // maxWidth: '40rem',
  },
};

const HomePage = () => {
  return (
    <div>
      <Box
        style={home.box}
        fontSize={{ xs: 50, sm: 80 }}
        maxWidth={{ xs: 300, sm: 400 }}
        mx={{ xs: 5, sm: 5 }}
        my={{ xs: 5, sm: 5 }}
        p={{ xs: 1, sm: 2 }}
        sx={{ boxShadow: 24 }}
        borderRadius={{ lg: 2 }}
      >
        <Typography variant='h2'>
          Hey, <br />
          <span
            style={{
              fontWeight: 'bold',
              color: 'black',
              webkitTextStroke: '.3px white',
            }}
            fontSize={{ xs: 50, sm: 100 }}
          >
            I'm Jordan
          </span>{' '}
          <br />
          and I'm glad you're here
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;
