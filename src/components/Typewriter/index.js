import { Typography } from '@mui/material';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Typewritten = () => {
  const words = ['React', 'Node', 'GraphQL', 'building things'];
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 1500,
  });

  return (
    <div className='typewriter'>
      <Typography variant='h1'>
        <strong>{text}</strong>
        <Cursor cursorStyle='_' />
      </Typography>
    </div>
  );
};

export default Typewritten;
