import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import '../assets/Navigation.css';
import Contact from './Contact';

const NAME_ACTIVATION_POINT = 100;
const BASE_COLOR = '#F1F2F6';
const ACTIVE_COLOR = '#758BFD';

const Navigation: React.FC = () => {
  const sections = ['home', 'about', 'skills', 'experience', 'projects'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProximity, setActiveProximity] = useState<Record<string, number>>({'home': 1});
  const [showHomeInfo, setShowHomeInfo] = useState(false);


  

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  const calculateColor = (proximity: number, hex1: string, hex2: string) => {
    const color1 = hexToRgb(hex1);
    const color2 = hexToRgb(hex2);
  
    if (!color1 || !color2) {
      return 'rgb(0, 0, 0)';
    }
  
    const r = color1.r + (color2.r - color1.r) * proximity;
    const g = color1.g + (color2.g - color1.g) * proximity;
    const b = color1.b + (color2.b - color1.b) * proximity;
  
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };
  
  function capitalizeFirstCharacter(s: string) {
    if (s.length === 0) {
        return "";
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }


  const handleMenuToggle = () => {
    menuOpen ? closeMenu() : openMenu();
  };

  const closeMenu = () => {
    document.body.style.overflow = 'unset';
    setMenuOpen(false);
  };

  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    setMenuOpen(true);
  };

  const handleProximity = () => {
    const proximities: { [key: string]: number } = {};

    for (const section of sections) {
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();
        const proximity = Math.max(0, 1 - Math.abs(window.innerHeight / 2 - (rect.top + rect.height / 2)) / (window.innerHeight / 2));
        proximities[section] = proximity;

        }
      }
    setActiveProximity(proximities);
  };

  const handleHomeInfo = () => {
    const element = document.getElementById('home-page-name');

    // Get its position and height
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementBottom = rect.bottom + window.scrollY;

      // Get current scroll position
      const scrollPosition = window.scrollY;

      // Show the name if we've scrolled past the element
      setShowHomeInfo(scrollPosition > elementBottom);
    }
  };

  const handleScroll = () => {
    handleProximity();
    handleHomeInfo();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const TabsComponent = () => (
    <div className='tabs'>
      {sections.map(section => (
        <Link key={section} to={section} smooth={true} offset={-100} duration={750} onClick={closeMenu}>
          <div className={'tab'}>
            <span style={{color: calculateColor(activeProximity[section], BASE_COLOR, ACTIVE_COLOR)}}>
              {capitalizeFirstCharacter(section)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

  

  return (
    <div className='appbar'>
      <div className={`name ${showHomeInfo ? 'active' : ''}`}>Calder Wilson</div>
      <div className={`blur ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Hamburger Menu */}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle}>
        { menuOpen ? <CloseIcon /> : <MenuIcon /> }
      </IconButton>
      {/* Mobile Navigation */}
      <div className={`drawer ${menuOpen ? 'open' : ''}`}>
        
        <div className='mobile-header-spacer'></div>
        <div className='mobileTabs'>
          <TabsComponent/>
        </div>
          <Contact/>
      </div>
      {/* Desktop Navigation */}
      <div className="desktopTabs">
        <TabsComponent/>
      </div>
      <div className={`desktopContact ${showHomeInfo ? 'active' : ''}`}>
        <Contact/>
      </div>
    </div>
  );
}

export default Navigation;
