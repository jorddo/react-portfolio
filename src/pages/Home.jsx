import { Box, Paper } from '@mui/material';
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
    </Paper>
  );
};

export default HomePage;
