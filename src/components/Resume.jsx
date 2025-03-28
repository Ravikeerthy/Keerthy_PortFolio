import React from 'react';
import resumeFile from './media/KEERTHANA Ravi_resume.pdf'; 
import "./resume.css"

const ResumeDownload = () => {
  return (
    <div className="resume-download">
      <h2>Download My Resume</h2>
      <a href={resumeFile} download="My_Resume.pdf">
        <button className="download-button">Download Resume</button>
      </a>
    </div>
  );
};

export default ResumeDownload;
