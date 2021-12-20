import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

import React from 'react';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
