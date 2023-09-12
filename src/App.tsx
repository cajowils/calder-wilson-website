import React from 'react';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
      <Footer/>
    </div>
  );
}

export default App;
