import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef} 
        skillsRef={skillsRef} 
        projectsRef={projectsRef} 
        resumeRef={resumeRef} 
       
        footerRef = {footerRef}
      />

      {/* Content Sections */}
      <section ref={aboutRef} id="about"><About /></section>
      <section ref={resumeRef} id="resume"><Resume /></section>
      <section ref={skillsRef} id="skills"><Skills /></section>
      <section ref={projectsRef} id="projects"><Projects /></section>
      {/* <section ref={contactRef} id="contact"><Contact /></section> */}
      <section ref={footerRef} id="contact"><Footer /></section>
    </div>
  );
};

export default App;
