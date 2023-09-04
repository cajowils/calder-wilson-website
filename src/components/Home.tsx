import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import '../assets/Home.css';

const Home: React.FC = () => {
  return (
    <div id='home' className='home-page'>
      <Grid container spacing={3} alignItems="center" style={{ minHeight: '70vh', padding: '2rem' }}>
      {/* Portrait */}
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <img alt="Calder Wilson" src={process.env.PUBLIC_URL + '/images/calder.jpeg'} className='portrait' />
        </Grid>

        {/* Details on the Right */}
        <Grid item xs={12} md={6}>
            {/* Name */}
            <Typography variant="h3" component="h1">
                Calder Wilson
            </Typography>

            {/* Title */}
            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                Software Engineer
            </Typography>

            {/* Brief Bio */}
            <Typography variant="body1" paragraph>
                A brief bio about yourself, detailing your experience, interests, and anything else you think might be relevant.
            </Typography>

            {/* Contact Button */}
            <Link to="contact" smooth={true} offset={50} duration={500}>
                <Button variant="contained" color="primary">
                    Get in Touch
                </Button>
            </Link>
          </Grid>
      </Grid>
    </div>);
}
export default Home;