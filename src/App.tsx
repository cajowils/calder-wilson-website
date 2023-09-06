import React from 'react';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './assets/App.css';

function App() {
  return (
    <div className='app'>
      <Navigation/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
