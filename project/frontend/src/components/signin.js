import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "./navbar";
import CustomFooter from "./footer";

function SignInPage() {
  // State variables to store user input and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if email is valid
    if (!isValidEmail(email)) {
      setError("Invalid email address");
      return;
    }

    // Check if password is provided
    if (!password) {
      setError("Password is required");
      return;
    }

    // Here you can implement the logic to authenticate the user and redirect them to the appropriate page
    // For now, let's just log the user input
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear error message if there are no errors
    setError("");
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <CustomNavbar />
      <Container className="mt-5">
        <h1 className="text-center mb-4">Sign In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Sign In
          </Button>
        </Form>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </Container>
      
      <CustomFooter />
    </div>
  );
}

export default SignInPage;
