import React from 'react';
import Picture from '../assets/pic.jpg'
import Resume from '../assets/Resume.pdf'
import "./style.css"

export const About = () => {
    return (
        
        <div id ="about" class="container">
            <div class="row">
            <div class="col-md-5">
                <div class="about-img">
                
                <img class="me" src={Picture} alt=""></img>
                
                </div>
            </div>
            <br></br>
            <div class="col-md-7 about-right">
                <h1 class="color-3"><b>About Me</b>
                </h1>
                
                <p class="p-first text-white">
                Full Stack Web Developer with a Digital Media Production degree and experience in the live events, media, and television industry. Recently earned a certificate in Full Stack development from the University of Kansas with new skills in JavaScript, jQuery, CSS3, HTML5, MySQL, NoSQL, MERN stack and responsive web design.
                </p>
                <p class="text-white">
                I am a self-motivated problem solver that is flexible working with a team or individually and am always striving to learn and find new creative challenges everyday.
                </p>
                <a href={Resume} class="btn btn-main">Resume PDF</a>
             
                
            </div>
         
            </div>
        </div>
    );

}

export default About; 