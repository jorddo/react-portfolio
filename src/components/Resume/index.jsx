import StyledResume from './style';
import JSResume from '../../assets/Resume.pdf';

const Resume = () => (
  <StyledResume id='resume'>
    <embed src={JSResume} title='resume'></embed>
  </StyledResume>
);

export default Resume;
