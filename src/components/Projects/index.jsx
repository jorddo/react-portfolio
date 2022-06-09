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
  return (
    <Section
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
