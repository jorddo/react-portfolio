import Section from '../common/Section';
import StyledAbout from './style';
import picture from '../../assets/headshot.jpg';
import { Typography } from '@mui/material';

const AboutPage = () => (
  <Section id='about' sx={{ mx: 'auto' }}>
    <Typography variant='h2' color='#4A4A4A'>
      About Me
    </Typography>
    <StyledAbout>
      <Typography className='about-content'>
        My name is Jordan, and I'm a Full-Stack Web Developer. I am married to
        my best friend, Jamie, and I have a daughter on the way. I have two cats
        named Mavis and Townes, and I've been living in Austin for about 25
        years.
        <br />
        <br />
        I am a former educator.
        <br />
        <br />I am a graduate of The Coding Bootcamp at The University of Texas
        at Austin.
      </Typography>
      <img src={picture} alt='Headshot' mh={{ xs: 20, sm: 25 }} />
    </StyledAbout>
  </Section>
);
export default AboutPage;
