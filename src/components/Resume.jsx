import React from 'react';
import resumeFile from './media/KEERTHANA RAVI_RES.pdf'; 
import "./resume.css"

const ResumeDownload = () => {
  return (
    <div className="resume-download">
   
    <div className="fixed-download">
      <a href={resumeFile} download="My_Resume.pdf">
        <button className="download-button">Download Resume</button>
      </a>
    </div>
  </div>
  );
};

export default ResumeDownload;
