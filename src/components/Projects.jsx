import React from 'react';
import "./projects.css";
import project1 from './media/Project-1.png';
import project2 from './media/Project-2.png';
import project3 from './media/Project-3.png';
import project4 from './media/Project-4.png';
import project5 from './media/Project-5.png';
import project6 from './media/Project-6.png';
import project7 from './media/Project-7.png';
import project8 from './media/Project-8.png';
import project9 from './media/Project-9.png';
import project10 from './media/Project-10.png';


const projectsData = [
  {
    title: "Finance and Expense Tracker",
    image: project1,
    description: "This is the frontend application for the Expense Tracker, built to help users manage their income, expenses, budgets, and savings. The application interacts with a backend API to provide a seamless user experience.",
    link: "https://expense-tracker-finance.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/Finance-and-Expense-Tracker.git"
  },
  {
    title: "Front-End Layouts",
    image: project2,
    description: "This Frontend layouts define the structure and design of a website, ensuring a responsive and user-friendly experience. In this eCommerce websites, layouts often include product grids, sliders, and carousels to showcase items attractively.",
    link: "https://front-end-tasks.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/Front-End-Task.git"
  },
  {
    title: "Email - builder",
    image: project3,
    description: "This is the frontend application for the Email Builder, designed to help users create, preview, and manage email templates efficiently. The application communicates with a backend API to provide a seamless user experience for building dynamic email templates.",
    link: "https://e-mail-builder.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/FRONT-END.git"
  },
  {
    title: "To-Do",
    image: project5,
    description: "This To-Do Task application helps users organize and manage their tasks efficiently. It typically includes features like adding, editing, deleting, and marking tasks as completed. With a clean UI, filters, and priority settings, it enhances productivity and task tracking.",
    link: "https://to-do-react-tasks.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/to-do.git"
  },
  {
    title: "DashBoard",
    image: project4,
    description: "This dashboard using Formik simplifies form handling in React applications by managing form state, validation, and submission. It allows users to input and manage data efficiently with built-in validation using Yup.",
    link: "https://formik-validation-task.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/formik-validation.git"
  },
  {
    title: "Mini E-Commerce",
    image: project6,
    description: "This mini eCommerce app using Redux efficiently manages global state for products, and cart. It enables smooth product browsing, adding/removing items from the cart with a centralized state management approach.",
    link: "https://react-redux-task-cart-design.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/redux-task.git"
  },
  {
    title: "API Integration",
    image: project7,
    description: "This API Integration with Math Fun Facts involves fetching interesting mathematical facts using an API and displaying them on a website or app. The API can provide random facts or facts based on specific numbers, and you can integrate it into a user interface that fetches and displays these facts dynamically, making learning math fun and engaging.",
    link: "https://day-20-tasks-3.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/Day-20-Task3.git"
  },
  {
    title: "Calculator",
    image: project8,
    description: "This Calculator is a simple app that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It typically includes an input area for the user to enter numbers and buttons for each operation. The user can input numbers, press the operation button, and get the result instantly. A basic calculator app can be built using HTML, CSS, and JavaScript.",
    link: "https://calculator-dom-task-1.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/Day-15-task-1-calculator.git"
  },
  {
    title: "API Integration",
    image: project9,
    description: "This project leverages the REST Countries API to fetch and display detailed information about countries around the world. Users can search for countries, view detailed information, and explore various data points such as population, region, capital, and weather report",
    link: "https://fetch-restcountries-weather-display.netlify.app/#",
    githubLink:"https://github.com/Ravikeerthy/Day-17-restcountries.git"
  },
  {
    title: "Simple Mini-Project",
    image: project10,
    description: "This Mini Project with User Authentication and Password Reset enables users to register, log in, and reset their passwords. It uses technologies like React for the frontend and Node.js for backend, with JWT authentication and Nodemailer for email integration. Users can securely manage their credentials and request password resets.",
    link: "https://password-reset-mini-project.netlify.app/",
    githubLink:"https://github.com/Ravikeerthy/password-reset-front-end.git"
    
  },
  {
    title: "Assigning-mentor Mini-Project",
    image: project10,
    description: "This project is a web API designed to manage mentors and their assigned students. It enables the assignment of students to mentors, retrieval of students assigned to specific mentors, and updating of mentor-student relationships.",
    link: "https://assign-mentor-yp3i.onrender.com",
      githubLink:"https://github.com/Ravikeerthy/assign-mentor.git"
  }
];

const Projects = () => {
  return (
    <section className="projects container mt-5">
      <h2 className="section-heading">My Work</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div className="col-md-4 col-sm-6" key={index} id='gap'>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-link"></i>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                  </a>
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
