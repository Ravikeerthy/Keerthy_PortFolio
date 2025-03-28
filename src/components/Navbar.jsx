import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, aboutRef, skillsRef, projectsRef, resumeRef, contactRef }) => {
  return (
    <nav className="navbar">
        <h1>
            Keerthy's Portfolio
        </h1>
      <ul>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
        <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
        <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
        <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
