import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import '../assets/Navigation.css';

const Navigation: React.FC = () => {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProximity, setActiveProximity] = useState<Record<string, number>>({'home': 1});

  

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


  const handleScroll = () => {
    const proximities: { [key: string]: number } = {};

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const proximity = 1 - Math.abs(window.innerHeight / 2 - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
        proximities[section] = proximity;
      }
    }

    setActiveProximity(proximities);
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
        <Link key={section} to={section} smooth={true} offset={0} duration={500} onClick={closeMenu}>
          <div className={'tab'}>
            <span style={{color: calculateColor(activeProximity[section], '#FFFFFA', '#758BFD')}}>
              {section}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );

  

  return (
    <div className='appbar'>
      <div className='name'>Calder Wilson</div>
      <div className={`blur ${menuOpen ? 'active' : ''}`}></div>

      {/* Mobile Hamburger Menu */}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle}>
        { menuOpen ? <CloseIcon /> : <MenuIcon /> }
      </IconButton>
      {/* Mobile Navigation */}
      <div className={`drawer ${menuOpen ? 'open' : ''}`}>
        
        <div className='mobileTabs'>
          <TabsComponent/>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="desktopTabs">
        <TabsComponent/>
      </div>
    </div>
  );
}

export default Navigation;
