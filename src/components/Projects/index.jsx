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

const ProjectsPage = () => {
  return (
    <Section id='projects'>
      <Box display='flex' alignItems='flex-start'>
        {/* card one */}
        <Card sx={{ maxWidth: 400, margin: 3, boxShadow: 12 }}>
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
        <Card sx={{ maxWidth: 467, margin: 3, boxShadow: 12 }}>
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
    </Section>
  );
};

export default ProjectsPage;
