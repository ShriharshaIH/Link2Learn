import React from "react";
import Logo from "./logo.svg"; // Replace './logo.svg' with the correct path to your logo file
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar({ logoSrc }) {
  return (
    <Navbar expand="lg" variant="dark" className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light pe-3">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Company Logo"
          />
          <div className="d-inline-block">
            <span className="fw-bold">Link2Learn</span>
            <div className="fs-6 text-light">Connecting Resources to Students</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="text-light">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy" className="text-light">
              Privacy Policy
            </Nav.Link>
            <Nav.Link as={Link} to="/terms" className="text-light">
              Terms of Use
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signin" className="text-light">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
