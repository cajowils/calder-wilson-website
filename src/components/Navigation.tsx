import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {

  return (
    <AppBar position="sticky" >
        <h1>Calder Wilson</h1>
      <Tabs >
        <Tab label="Home" component={Link} to="home" smooth={true} offset={-150} duration={500} />
        <Tab label="About" component={Link} to="about" smooth={true} offset={-150} duration={500}/>
        <Tab label="Contact" component={Link} to="contact" smooth={true} offset={50} duration={500} />
      </Tabs>
    </AppBar>
  );
}

export default Navigation;