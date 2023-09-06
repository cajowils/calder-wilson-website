import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import '../assets/Home.css';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div id='home' className='home-page'>
      <img alt="Calder Wilson" src={process.env.PUBLIC_URL + '/images/calder_no_background.png'} className='portrait' />
      <div className='home-container'>
        <div className="home-spacer"></div>
        <div className='name-title-container'>
          <h1 id='home-page-name'>Calder Wilson</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className='home-contact'>
          <Contact />
        </div>
      </div>
    </div>);
}
export default Home;