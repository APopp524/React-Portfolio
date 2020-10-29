import React from 'react';
import "./style.css"

export const Contact = () => {
    return (
        

<div align="center">
    <h2>Let's Talk!</h2>
    <form id="form" class="topBefore">		
        <input id="name" type="text" placeholder="NAME"></input>
        <input id="email" type="text" placeholder="E-MAIL"></input>
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <input id="submit" type="submit" value="GO!"></input>
    </form>
</div>

        );

    }

        export default Contact; 