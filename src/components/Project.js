import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col } from "react-bootstrap";


function Project() {

    const projects = [
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: 'url'
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: 'url'
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: 'url'
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: 'url'
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: 'url'
        },
        {
            title: 'Project',
            description: 'Design & Development',
            imgUrl: 'url'
        },
    ]


  return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <h2>My Projects</h2>
                <p> Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah </p>
                <Row>
                    {
                        projects.map((project, index) => {
                            return (
                                <p>{project.title}</p>
                            )
                        })
                    }
                </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Project