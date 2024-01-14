import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InstaLogo from "../logos/icons8-instagram-48.png";
import LinkedInLogo from "../logos/icons8-linkedin-circled-48.png";
import GitHubLogo from "../logos/icons8-github-48.png";
import { HashLink } from "react-router-hash-link";
import "../css/Navbar.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Navbar
      expand="md"
      className={`nav.navbar ${scrolled ? "scrolled" : ""} ${
        mobileMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <Container>
        <Navbar.Brand href="#home">
          MyLittle<span>Website</span>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleMobileMenuToggle}
          aria-controls="basic-navbar-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://cz.linkedin.com/in/farrukh-mirjalilov-1a6a51152" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn logo" />
              </a>
              <a href="https://www.instagram.com/fara_svn/" target="_blank" rel="noopener noreferrer">
                <img src={InstaLogo} alt="Instagram Logo" />
              </a>
              <a href="https://github.com/FaraCR" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="GitHub logo" />
              </a>
            </div>
            <HashLink to="#connect">
              <button className="contact-button">
                <span>Lets Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
