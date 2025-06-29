// pages/HomePage.jsx
import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Testimonial from './section/Skills'
import Skills from './section/Skills'
import Contact from './section/Contact'


const HomePage = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default HomePage;
