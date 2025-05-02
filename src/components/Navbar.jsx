import React, { useRef } from 'react';
import './navbar.css';

const Navbar = ({ scrollToSection, aboutRef, skillsRef, projectsRef, resumeRef }) => {

  const collapseRef = useRef(null); // React ref to target the collapse div

  const handleScroll = (ref) => {
    scrollToSection(ref);
    // Close the menu if it's open
    if (collapseRef.current && collapseRef.current.classList.contains('show')) {
      collapseRef.current.classList.remove('show');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
    <a className="navbar-brand" href="#">Keerthy's Portfolio</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item" onClick={() => handleScroll(aboutRef)}>
          <span className="nav-link" role="button">About</span>
        </li>
        <li className="nav-item" onClick={() => handleScroll(skillsRef)}>
          <span className="nav-link" role="button">Skills</span>
        </li>
        <li className="nav-item" onClick={() => handleScroll(projectsRef)}>
          <span className="nav-link" role="button">Projects</span>
        </li>
        <li className="nav-item" onClick={() => handleScroll(resumeRef)}>
          <span className="nav-link" role="button"></span>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
