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
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

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
