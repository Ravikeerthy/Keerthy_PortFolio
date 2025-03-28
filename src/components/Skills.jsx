import React from "react";
import "./skill.css";
import html from "./media/html-5.png";
import bootstrap from "./media/bootstrap.jpg";
import css3 from "./media/css-3.png";
import django from "./media/dj.png";
import express from "./media/express.png";
import java from "./media/java.png";
import javascript from "./media/javascript.jpg";
import mongo from "./media/mongo.png";
import mysql from "./media/mysql.png";
import nodejs from "./media/node.png";
import python from "./media/python.png";
import reactlogo from "./media/react.png";

const skillsData = [
  { name: "HTML", image: html },
  { name: "CSS", image: css3 },
  { name: "JavaScript", image: javascript },
  { name: "React", image: reactlogo },
  { name: "Node.js", image: nodejs },
  { name: "MongoDB", image: mongo },
  { name: "MySQL", image: mysql },
  { name: "Python", image: python },
  { name: "Java", image: java },
  { name: "Express.js", image: express },
  { name: "Django", image: django },
  { name: "Bootstrap", image: bootstrap },
];

const Skills = () => {
  return (
    <section className="skills container mt-5">
      <h2 className="section-heading">My Skills</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="skill-card">
              <img src={skill.image} alt={skill.name} className="skill-icon" />
              <h4>{skill.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
