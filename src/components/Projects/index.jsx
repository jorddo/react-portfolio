import * as React from 'react';
import {
  CardActionArea,
  Typography,
  Card,
  CardContent,
  CardMedia,
  // Container,
  Box,
} from '@mui/material';
import Section from '../common/Section';
import StyledProjects from './style';

const ProjectsPage = () => {
  const projectsPattern =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23bebebe' fill-opacity='0.41'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <Section
      pattern={projectsPattern}
      id='projects'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <StyledProjects>
        <Typography variant='h2'>Projects</Typography>
        <Box
          display='flex'
          alignItems='center'
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          {/* card one */}
          <Card
            sx={{
              // maxHeight: '65%',
              // maxWidth: 'auto',
              margin: 3,
              boxShadow: 12,
              alignItems: 'center',
            }}
          >
            <CardActionArea
              href='https://code-vegeta.herokuapp.com/'
              target='_blank'
            >
              <CardMedia
                component='img'
                height='100%'
                image={require('../../assets/vegeta.png')}
                alt='code vegeta'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Vegeta
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A template building app
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* card two */}
          <Card
            sx={{
              // maxHeight: '65%',
              // maxWidth: 'auto',
              margin: 3,
              boxShadow: 12,
              alignItems: 'center',
            }}
          >
            <CardActionArea
              href='https://frozen-savannah-04684.herokuapp.com/'
              target='_blank'
            >
              <CardMedia
                component='img'
                height='100%'
                image={require('../../assets/we-help-austin.png')}
                alt='code vegeta'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  We Help Austin
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A community support and connection app
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* card three */}
          <Card
            sx={{
              // maxHeight: '65%',
              // maxWidth: 'auto',
              margin: 3,
              boxShadow: 12,
              alignItems: 'center',
            }}
          >
            <CardActionArea
              href='https://dylank641.github.io/group-project1/'
              target='_blank'
            >
              <CardMedia
                component='img'
                height='100%'
                image={require('../../assets/city-scout.png')}
                alt='City Scout'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  City Scout
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Find your next vacation destination
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </StyledProjects>
    </Section>
  );
};

export default ProjectsPage;
