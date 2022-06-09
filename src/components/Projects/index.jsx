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
  const pattern =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E";

  return (
    <Section
      pattern={pattern}
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
        </Box>
      </StyledProjects>
    </Section>
  );
};

export default ProjectsPage;
