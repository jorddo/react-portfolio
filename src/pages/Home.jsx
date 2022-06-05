import { Box, Paper, Stack } from '@mui/material';
import Image from '../assets/landing-bg.jpg';

// adding background img to landing page
const styles = {
  paperContainer: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${Image})`,
  },
};

const HomePage = () => {
  return (
    <Paper style={styles.paperContainer}>
      <Box sx={{ fontSize: 200 }}>
        Hi, <br />
        I'm Jordan
      </Box>
      <Stack fontSize={69}>I'm glad you're here.</Stack>
    </Paper>
  );
};

export default HomePage;
