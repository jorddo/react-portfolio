import Section from '../common/Section';
import StyledResume from './style';
import JSResume from '../../assets/Resume.pdf';
import { Typography } from '@mui/material';

const Resume = () => (
  <Section>
    <Typography variant='h2' sx={{ color: '#4A4A4A' }} mb={{ xs: 3, sm: 5 }}>
      Resume
    </Typography>
    <StyledResume id='resume'>
      <embed src={JSResume} title='resume'></embed>
    </StyledResume>
  </Section>
);

export default Resume;
