import { Container, Row, Col } from "react-bootstrap";
import Inst from "../logos/icons8-instagram-48.png";
import Linkd from "../logos/icons8-linkedin-circled-48.png";
import Github from "../logos/icons8-github-48.png";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <p>© My Little Website 2023. All Rights Reserved</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://cz.linkedin.com/in/farrukh-mirjalilov-1a6a51152">
                <img src={Linkd} alt="logo" />
              </a>
              <a href="https://www.instagram.com/fara_svn/">
                <img src={Inst} alt="logo" />
              </a>
              <a href="https://github.com/FaraCR">
                <img src={Github} alt="logo" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
