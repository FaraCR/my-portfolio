import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from '../logos/IMG_4329.jpg';
import '../css/Banner.css';

function Banner() {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-centered'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>Hi, I am Fara</h1>
                    <p> Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah </p>
                    <button onClick={() => console.log('function')}>Lets Connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={myImage} alt='Fara'/>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner