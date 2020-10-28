import React from 'react';
import "./style.css"
import Card from 'react-bootstrap/Card'


//Portfolio Bootstrap Cards HTML//
export const Portfolio = () => {
    return (

        //Portfolio Bootstrap Cards HTML//
<div id="main">
    
          <div class="card-deck">
            <div class="card text-center text-white bg-dark mb-3 rounded-0">
              <img class="card-img-top rounded-0" src="../" alt="Front page example"></img>
              <div class="card-body">
                <h4 class="card-title">Exploration Food</h4>
                <p class="card-text">It is designed to match the needs of all diets and food restrictions. Great for those with allergies, religious restrictions, or are simply particular about their food.
                   This app will present users with an exciting new recipe generated based on thier personalized profile!</p>
                <a href="https://joepall.github.io/Exploration-Food/" class="btn btn-main">Check it out!</a>
                <a href="https://github.com/JoePall/Exploration-Food" class="btn btn-main">Github Repo</a>
              </div>
            </div>
            <div class="card text-center text-white bg-dark mb-3 rounded-0">
              <img class="card-img-top rounded-0" src="assets/day-planner.png" alt="Front page example"></img>
              <div class="card-body">
                <h4 class="card-title">Day Planner</h4>
                <p class="card-text">This simple calendar application allows the user to save events for each hour of the standard work day from 9am to 5pm.
                   This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                <a href="https://apopp524.github.io/Day-Planner/" class="btn btn-main">Check it out!</a>
                <a href="https://github.com/APopp524/Code-Quiz" class="btn btn-main">Github Repo</a>
              </div>
            </div>
            <div class="card text-center text-white bg-dark mb-3 rounded-0">
              <img class="card-img-top rounded-0" src="assets/weather.png" alt="Front page example"></img>
              <div class="card-body">
                <h4 class="card-title">Weather Dashboard</h4>
                <p class="card-text">This weather dashboard will run in the browser using updated HTML, CSS, and Javascript.
                   When you search for a city you are presented with current weather conditions and a future five day forecast. It will also save your previous searches below the search bar.</p>
                <a href="https://apopp524.github.io/Weather-Dashboard/" class="btn btn-main">Check it out!</a>
                <a href="https://github.com/APopp524/Weather-Dashboard" class="btn btn-main">Github Repo</a>
              </div>
            </div>
          </div>
  
        <div id="card-deck-2" class="card-deck">
          <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src="assets/note.png" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Note Taker App</h5>
              <p class="card-text">The Note Taker App is for or users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. 
                Being able to take persistent notes allows users to have written information available when needed.</p>
              <a href="https://lit-lowlands-32256.herokuapp.com/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Note-Taker-App" class="btn btn-main">Github Repo</a>
            </div>
          </div>
          <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src="assets/burger.png" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Eat-Da-Burger App</h5>
              <p class="card-text">Eat-Da-Burger! is a restaurant app made with MySQL, Node, Express, Handlebars and a ORM that lets users input the names of burgers they'd like to eat.</p>
              <a href="https://infinite-hamlet-45472.herokuapp.com/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Eat-Da-Burger-App" class="btn btn-main">Github Repo</a>
            </div>
          </div>
          <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src="assets/storventory.png" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Storventory</h5>
              <p class="card-text">The Storventory app a inventory management system for small restaurants. It is setup to support multiple restaurant owners with multiple restaurants each.</p>
              <a href="https://bit.ly/3cFb40D" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Storventory" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </div>

    </div>
  

    )};

export default Portfolio;

      
