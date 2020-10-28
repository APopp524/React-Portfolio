import React from 'react';
import "./style.css"


export const Navigation = () => (

    //Hamburger Menu HTML//

    <div>
    <div id="menuToggle">
    <nav role="navigation" id="nav">
  
        <input type="checkbox" />
        
        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
          <a href="/"><li>Home</li></a>
          <a href="/About"><li>About</li></a>
          <a href="/Portfolio"><li>Portfolio</li></a>
          <a href="/Contact"><li>Contact</li></a>
        </ul>
    </nav>
    </div>
    
    <div class="social-buttons">
      <a href="https://www.facebook.com/profile.php?id=100007370688787"><i class="fab fa-facebook fa-2x"></i></a>
      <a href="https://www.google.com/"><i class="fab fa-google fa-2x"></i></a>
      <a href="https://github.com/APopp524"><i class="fab fa-github fa-2x"></i></a>
      <a href="https://www.linkedin.com/in/andrewpopp123/"><i class="fab fa-linkedin-in fa-2x"></i></a>
    </div>

    </div>
  )
  
  export default Navigation;