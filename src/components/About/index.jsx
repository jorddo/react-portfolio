import Section from '../common/Section';
import StyledAbout from './style';
import picture from '../../assets/headshot.jpg';
import { Typography } from '@mui/material';

const AboutPage = () => (
  <Section id='about'>
    <Typography variant='h2'>About Me</Typography>
    <StyledAbout>
      <Typography className='about-content'>
        My name is Jordan, and I'm a Full-Stack Web Developer. I am married with
        a daughter on the way. I have two cats named Mavis and Townes, and I've
        been living in Austin for about 25 years.
      </Typography>
      <img src={picture} alt='Headshot' mh={{ xs: 20, sm: 25 }} />
    </StyledAbout>
  </Section>
);
export default AboutPage;
