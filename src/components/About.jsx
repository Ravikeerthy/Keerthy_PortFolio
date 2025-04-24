import React, { useEffect, useState } from "react";
import "./about.css";
import profileImg from "./media/hi-image.jpg";

const About = () => {
  const roles = [
    "Keerthana Ravi",
    "FrontEnd Developer",
    "BackEnd Developer",
    "Full Stack Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1000;
      setTimeout(() => setIsDeleting(true), typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, roles]);

  return (
    <section className="about container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="typewriter-container">
            <h1>Hi there!👋 I am</h1>

            {/* Editable wording goes here */}
            <h2 className="typewriter">{text}</h2>

            <p className="about-text">
              Full Stack Developer with expertise in web development,
              encompassing front-end design and back-end architecture. Adept at
              delivering high-quality, user-focused solutions and optimizing
              functionality to meet diverse business needs.
            </p>

            {/* Buttons */}

            {/* Social Links */}
            <div className="mt-4">
              <ul className="social-links d-flex justify-content-center">
                <li>
                  <a href="mailto:ravikeerthy1807@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/keerthana-ravi-a0b803228/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ravikeerthy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4">
          <img src={profileImg} alt="Keerthana" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
