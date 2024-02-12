import React from "react";
import "../css/Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import CardImg from "../logos/greyImg.png";
import Jammming from "../logos/jamming.png";
import WeatherIcon from '../logos/weather.png';

function Project() {
  const projects = [
    {
      title: "Jammming",
      description:
        "My first Portfolio project from Codeacademy. Using Spotify API it allows the user to search for songs, create custom playlists and save them in the user's Spotify account",
      imgUrl: Jammming,
      projectLink: "https://jammmingbyfara.netlify.app",
    },
    {
      title: "Weather App",
      description: "The Weather App is a simple web application that allows users to search for weather information based on location. It utilizes the OpenWeatherMap API to fetch real-time weather data and displays it in a user-friendly interface.",
      imgUrl: WeatherIcon,
      projectLink: "weatherappbyfara.netlify.app"
    },
    /*{
      title: "Project",
      description: "Design & Development",
      imgUrl: CardImg,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: CardImg,
    }*/
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>My Projects</h2>
            <p>
              {" "}
              Here are some projects i have made so far. Feel free to test them
              out.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => {
            return <ProjectCards key={index} {...project} />;
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Project;
