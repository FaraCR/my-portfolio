import React, { useEffect } from "react";
import "../css/Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import TagCloud from "TagCloud";

const SkillsShpere = () => {
  // Animation settings for Text Cloud

  const getRadius = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      return 150; // Set a smaller radius for screens less than 576px wide
    } else if (screenWidth < 992) {
      return 220; // Set a medium radius for screens between 576px and 991px wide
    } else {
      return 250; // Default radius for larger screens
    }
  };

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "ES6",
        "GIT",
        "UI/UX Design",
        "Bootstrap",
        "web development",
        "GITHUB",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "ES6",
        "GIT",
        "GITHUB",
        "UI/UX Design",
        "web development",
      ];

      const options = {
        radius: getRadius(),
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <Container>
        <Row className="align-items-centered">
          <Col>
            <div className="skill-box">
              <h2>My Skills</h2>
              <div className="text-shpere">
                <span className="tagcloud"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsShpere;
