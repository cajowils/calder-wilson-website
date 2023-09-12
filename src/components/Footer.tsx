import React from 'react';
import '../assets/Footer.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-scroll';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-container'>
                <Link className='top-button' to='home' smooth={true} duration={1000} offset={-100}>
                    <ArrowUpwardIcon/>
                </Link>
            <div className='footer-contact'>
                <Contact />
            </div>
        </div>
    </div>);
}
export default Home;