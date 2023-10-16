import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from './ProjectCards';
import CardImg from '../logos/solid-color-image.png';


function Project() {

    const projects = [
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: CardImg
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: CardImg
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: CardImg
        },
        
    ]


  return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <h2>My Projects</h2>
                <p> Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah </p>
                </Col>
                </Row>
                <Row> 
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCards 
                                key={index}
                                {...project} />
                            )
                        })
                    }
            </Row>
        </Container>
    </section>
  )
}

export default Project