// src/AboutMe.jsx
import { FaFacebook,FaInstagram, FaTiktok  } from "react-icons/fa";
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <img src="./omarbm.png" alt="Profile" className="profile-picture" />
        <h1>Omar Ben Massoud (Shop Owner)</h1>
        <h2>Web Developement / Design</h2>
      </div>
      <div className="about-me-content">
        <p>
        Front-end web development focuses on creating the visual and interactive aspects of a website that users directly engage with. It involves using a combination of HTML for structure, CSS for styling, and JavaScript for functionality to build user interfaces that are not only visually appealing but also responsive and accessible across different devices and browsers. Front-end developers often utilize frameworks and libraries such as React, Angular, and Vue.js to streamline the development process and enhance performance. Their work ensures a seamless user experience by optimizing loading times, implementing intuitive navigation, and ensuring compatibility with various web standards​ 
        </p>
        <h1>About Me :</h1>
        <p>
          Hello Everyone , Let Me Introduit My Self:
          My Name Is Omar Ben Massoud , I Live In Sfax From Tunisia
          I Am 14 years Old Boy With An Experience In Web Developement 
          And Front End Developement, And Web Design, Banner Design ,
          Avatar Design ...
        </p>
        <a href="https://www.facebook.com/omar.benmasoud.75"><FaFacebook/></a> <a href="https://www.instagram.com/scuzaa_1/"><FaInstagram/></a> <a href="https://www.tiktok.com/@scuzaa_v"><FaTiktok/></a>
      </div>
    </div>
  );
};

export default About;
