import React from "react";
import { Col } from "react-bootstrap";

function ProjectCards({ title, description, imgUrl, projectLink }) {
  return (
    <Col xs={12} md={6} xl={6} className="d-flex justify-content-center">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Fara's project" width="500" height="300" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}

export default ProjectCards;
