import React, { useEffect, useState } from 'react';
import '../assets/About.css';

const About: React.FC = () => {

  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      const rect = aboutElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight*.75 && rect.bottom >= 0) {
        setVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div id='about' className={`about-page ${isVisible ? 'fade-in' : 'invisible'}`}>
        <div className='about-container'>
        <h1>About Me</h1>
          <p>Hey there! I'm Calder, a recent graduate from the <b>University of California, Santa Cruz</b>, holding a Bachelor of Science in computer science and a minor in linguistics. I've had the privilege of working with industry giants like <b>Amazon</b> and <b>Northwestern Mutual</b>, where I've contributed to innovative projects and improved user experiences.</p>
          <p>Outside of the tech world, I'm passionate about <b>music</b>, and you'll probably find me playing piano or guitar in my free time. I also have a great interest in the outdoors and enjoy <b>backpacking</b> with friends.</p>
          <p>I'm currently looking for <b>entry-level software engineer</b> positions.  If you're in the market for a dedicated, versatile developer, <a href="mailto:calderjwilson@gmail.com" target="_blank" rel="noreferrer">let's connect</a>—I'd love to discuss how I can add value to your team!</p>
        </div>
    </div>
    );
}

export default About;
