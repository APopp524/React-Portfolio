import React from 'react';
import Picture from '../assets/pic.jpg'

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
                 Full Stack Web Developer with a Digital Media Production degree and experience in the live events, media, and television industry. Recently earned a certificate in Full Stack development from the University of Kansas with new skills in Javascript, CSS, HTML, and responsive web design.
                </p>
                <p class="text-white">
                 I enjoy problem-solving and am a flexible worker that can work as a team or individually to get the task completed. I am passionate about web design and computer science and strive to further my knowledge in any way I can, and I look forward to challenging myself every day. 
                </p>
                <a href="assets/Andrew Popp Resume.pdf" class="btn btn-main">Resume PDF</a>
             
                
            </div>
         
            </div>
        </div>
    );

}

export default About; 