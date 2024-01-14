import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../logos/IMG_4329.jpg";
import "../css/Banner.css";
import { HashLink } from "react-router-hash-link";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-centered">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Hi, I am Fara</h1>
            <p>
              {" "}
              I am a junior front-end developer based in Prague, Czech Republic. Eager to learn new things and find a new team for future projects. If you have any questions, feel free to contact me on LinkedIn or using the contact form below. Cheers!{" "}
            </p>
            <HashLink to="#connect" className="button-hover">
              <button>Lets Connect</button>
            </HashLink>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={myImage} alt="Fara" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
