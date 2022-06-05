import { Box, Typography } from '@mui/material';

const home = {
  typog: {
    fontSize: 100,
  },
  box: {
    backgroundColor: '#121212',
    color: 'white',
    maxWidth: '40rem',
  },
};

const HomePage = () => {
  return (
    <div>
      <Box
        style={home.box}
        mx={{ xs: 2, sm: 5 }}
        my={{ xs: 2, sm: 5 }}
        sx={{ boxShadow: 20 }}
      >
        <Typography variant='h2' style={home.typog}>
          Hey, I'm Jordan and I'm glad you're here
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;
