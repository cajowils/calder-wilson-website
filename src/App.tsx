import React from 'react';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navigation/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
