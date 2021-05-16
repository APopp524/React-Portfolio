import React from 'react';
import Picture from '../assets/pic.jpg'
import Resume from '../assets/Resume.pdf'
import "./style.css"

export const About = () => {
    return (
      <div id="about" class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="about-img">
              <img class="me" src={Picture} alt=""></img>
            </div>
          </div>
          <br></br>
          <div class="col-md-7 about-right">
            <h1 class="color-3">
              <b>About Me</b>
            </h1>

            <p class="p-first text-white">
              Full Stack Developer with a Digital Media Production degree and
              experience in the live events, media, and television industry.
              Recently completed a Full Stack Developer Internship with Light Up
              the Dark LLC. I have built a Node server with
              GraphQL, creating the models, resolvers and subscriptions. I worked
              with Typescript, WordPress, PostgreSQL and Jest. Earned a
              Full Stack Development certificate from the University of
              Kansas in November 2020 with skills in JavaScript, jQuery, CSS3, HTML5, MySQL,
              NoSQL, MERN stack and responsive web design.
            </p>
            <p class="text-white">
              I am a self-motivated problem solver that is flexible working with
              a team or individually and am always striving to learn and find
              new creative challenges everyday.
            </p>
            <a href={Resume} class="btn btn-main">
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    );

}

export default About; 