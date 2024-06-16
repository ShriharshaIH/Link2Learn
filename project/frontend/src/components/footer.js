import React from "react";
import { Link } from "react-router-dom";

function CustomFooter() {
  return (
    <div>
      <footer className="text-center py-4 bg-dark text-light">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Link2Learn. All rights reserved.
          </p>
          <p>
            <Link to="/privacy">Privacy Policy</Link> |{" "}
            <Link to="/terms">Terms of Use</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CustomFooter;
