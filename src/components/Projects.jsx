import React from 'react';
import "./projects.css";
import project1 from './media/Project-1.png';
import project2 from './media/Project-2.png';
import project3 from './media/Project-3.png';

const projectsData = [
  {
    title: "Finance and Expense Tracker",
    image: project1,
    description: "This is the frontend application for the Expense Tracker, built to help users manage their income, expenses, budgets, and savings. The application interacts with a backend API to provide a seamless user experience",
    link: "https://expense-tracker-finance.netlify.app/",
    githubLink: "https://github.com/Ravikeerthy/Finance-and-Expense-Tracker.git",
    backendLink: "https://github.com/Ravikeerthy/Back-End.git"
  },
  {
    title: "Front-End Layouts",
    image: project2,
    description: "This Frontend layouts define the structure and design of a website, ensuring a responsive and user-friendly experience. In this eCommerce websites, layouts often include product grids, sliders, and carousels to showcase items attractively.",
    link: "https://front-end-layouts.netlify.app/",
    githubLink: "https://github.com/Ravikeerthy/Front-End-Task.git"
  },
  {
    title: "Email - builder",
    image: project3,
    description:  "This is the frontend application for the Email Builder, designed to help users create, preview, and manage email templates efficiently. The application communicates with a backend API to provide a seamless user experience for building dynamic email templates.",
    link: "https://e-mail-builder.netlify.app/",
    githubLink: "https://github.com/Ravikeerthy/FRONT-END.git",
    backendLink: "https://github.com/Ravikeerthy/eMail-Builder-Back-End.git"
  }
];

const Projects = () => {
  return (
    <section className="projects container mt-5">
      <h2 className="section-heading">My Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div className="col-md-4 col-sm-6 gap-card" key={index}>
            <div className="project-card">
              <div className="project-content">
                <h4>{project.title}</h4>
                <img src={project.image} alt={project.title} className="project-image" />
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-link"></i>
                  </a>
                  <div className="tooltip-container">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <span className="tooltip-text">Frontend</span>
                  </div>
                  {project.backendLink && (
                    <div className="tooltip-container">
                      <a href={project.backendLink} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <span className="tooltip-text">Backend</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
