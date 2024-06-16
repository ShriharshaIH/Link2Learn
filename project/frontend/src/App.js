import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/home";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Class11Page from "./components/class11";
import Class12Page from "./components/class12";
import AboutUsPage from "./components/aboutus";
import PrivacyPolicyPage from "./components/privacy";
import TermsOfUsePage from "./components/termsofuse";
import SignInPage from "./components/signin";
import SignUpPage from "./components/signup";
import Class9Page from "./components/class9";
import Class10Page from "./components/class10";


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/"  element={<HomePage/>} />
            <Route path="/class11"  element={<Class11Page/>} />
            <Route path="/class12"  element={<Class12Page/>} />
            <Route path="/aboutus"  element={<AboutUsPage/>} />
            <Route path="/privacy"  element={<PrivacyPolicyPage/>} />
            <Route path="/terms"  element={<TermsOfUsePage/>} />
            <Route path="/signin"  element={<SignInPage/>} />
            <Route path="/signup"  element={<SignUpPage/>} />
            <Route path="/class9"  element={<Class9Page/>} />
            <Route path="/class10"  element={<Class10Page/>} />

          </Routes>
        </Router>         
      </div>
    </>
  );
}

export default App;
