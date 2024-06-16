import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "./class9.css"; // Import styles from class11.css
import Logo from "./logo.svg"; // Replace './logo.svg' with the correct path to your logo file
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CustomFooter from "./footer";
import CustomNavbar from "./navbar";

function Class9Page() {
  return (
    <div>
      <CustomNavbar/>

      <header className="class11-header">
        <div className="text-center">
          <h1>Welcome to Class 9!</h1>
          <p className="lead">Choose your subject:</p>
          <div className="resource-buttons">
            <div className="button-wrapper">
              <Button variant="primary" className="btn">
                Science
              </Button>
            </div>
            <div className="button-wrapper">
              <Button variant="primary" className="btn">
                Mathematics
              </Button>
            </div>
            <div className="button-wrapper">
              <Button variant="primary" className="btn">
                Social Studies
              </Button>
            </div>
            <div className="button-wrapper">
              <Button variant="primary" className="btn">
                English
              </Button>
            </div>
            <div className="button-wrapper">
              <Button variant="primary" className="btn">
                Prepare for Exam
              </Button>
            </div>
          </div>
        </div>
      </header>
      <CustomFooter/>
    </div>
  );
}

export default Class9Page;
