import Section from '../common/Section';
import StyledResume from './style';
import JSResume from '../../assets/Resume.pdf';
import { Typography } from '@mui/material';

const Resume = () => (
  <Section>
    <Typography variant='h2'>Resume</Typography>
    <StyledResume id='resume'>
      <embed src={JSResume} title='resume'></embed>
    </StyledResume>
  </Section>
);

export default Resume;
