import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import React from "react";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
