import React from 'react';
import "./style.css"

export const Contact = () => {
    return (
        

<div align="center">
    <h1>Let's Talk!</h1>
    <ul id="list">
      <li id="icons">
        <i class="fa fa-envelope"></i>
        <a>apopp524@gmail.com</a>
      </li>
      <li>
        <i class="fa fa-phone"></i>
        <a>314-374-5558</a>
      </li>
      </ul>
            <form id="form" class="topBefore" action="mailto:apopp524@gmail.com" method="post" enctype="text/plain">		
                <input id="name" type="text" placeholder="NAME"></input>
                <input id="email" type="text" placeholder="E-MAIL"></input>
                <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="SUBMIT"></input>
            </form>
</div>

        );

    }

        export default Contact; 