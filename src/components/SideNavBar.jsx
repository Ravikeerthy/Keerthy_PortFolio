import React from 'react';
import './SideNavbar.css';

const SideNavbar = ({ scrollToSection, aboutRef, skillsRef, projectsRef, resumeRef, contactRef }) => {
  return (
    <nav className="side-navbar">
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

export default SideNavbar;
