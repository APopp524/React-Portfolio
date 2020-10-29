import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./style.css"
import Expo from '../assets/expo-food.png'
import Planner from '../assets/day-planner.png'
import Weather from '../assets/weather.png'
import { Container } from 'reactstrap';



//Portfolio Bootstrap Cards HTML//
export const Portfolio = () => {


    return (

        //Portfolio Bootstrap Cards HTML//
<Container id="container" fluid>
<div class="card-deck">
    <Row>
        <Col>
          <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src={Expo} alt="Front page example"></img>
            <div class="card-body">
              <h4 class="card-title">Exploration Food</h4>
              <p class="card-text">It is designed to match the needs of all diets and food restrictions. Great for those with allergies, religious restrictions, or are simply particular about their food.
                 This app will present users with an exciting new recipe generated based on thier personalized profile!</p>
              <a href="https://joepall.github.io/Exploration-Food/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/JoePall/Exploration-Food" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </Col>

        <Col>
        <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src={Planner} alt="Front page example"></img>
            <div class="card-body">
              <h4 class="card-title">Day Planner</h4>
              <p class="card-text">This simple calendar application allows the user to save events for each hour of the standard work day from 9am to 5pm.
                 This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
              <a href="https://apopp524.github.io/Day-Planner/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Code-Quiz" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </Col>

        <Col>
        <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src={Weather} alt="Front page example"></img>
            <div class="card-body">
              <h4 class="card-title">Weather Dashboard</h4>
              <p class="card-text">This weather dashboard will run in the browser using updated HTML, CSS, and Javascript.
                 When you search for a city you are presented with current weather conditions and a future five day forecast. It will also save your previous searches below the search bar.</p>
              <a href="https://apopp524.github.io/Weather-Dashboard/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Weather-Dashboard" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </Col>

      </Row>
      </div>

      <div class="card-deck-2">
    <Row>
        <Col>
          <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src={Expo} alt="Front page example"></img>
            <div class="card-body">
              <h4 class="card-title">Exploration Food</h4>
              <p class="card-text">It is designed to match the needs of all diets and food restrictions. Great for those with allergies, religious restrictions, or are simply particular about their food.
                 This app will present users with an exciting new recipe generated based on thier personalized profile!</p>
              <a href="https://joepall.github.io/Exploration-Food/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/JoePall/Exploration-Food" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </Col>

        <Col>
        <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src={Planner} alt="Front page example"></img>
            <div class="card-body">
              <h4 class="card-title">Day Planner</h4>
              <p class="card-text">This simple calendar application allows the user to save events for each hour of the standard work day from 9am to 5pm.
                 This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
              <a href="https://apopp524.github.io/Day-Planner/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Code-Quiz" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </Col>

        <Col>
        <div class="card text-center text-white bg-dark mb-3 rounded-0">
            <img class="card-img-top rounded-0" src={Weather} alt="Front page example"></img>
            <div class="card-body">
              <h4 class="card-title">Weather Dashboard</h4>
              <p class="card-text">This weather dashboard will run in the browser using updated HTML, CSS, and Javascript.
                 When you search for a city you are presented with current weather conditions and a future five day forecast. It will also save your previous searches below the search bar.</p>
              <a href="https://apopp524.github.io/Weather-Dashboard/" class="btn btn-main">Check it out!</a>
              <a href="https://github.com/APopp524/Weather-Dashboard" class="btn btn-main">Github Repo</a>
            </div>
          </div>
        </Col>

      </Row>
      </div>
    </Container>

    

    )};

export default Portfolio;

      
