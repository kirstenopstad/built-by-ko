import React from 'react';
import './App.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
import Container from 'react-bootstrap/Container';
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const site = 
  <React.Fragment>
    <Header />
    <Container fluid>
      <Profile />
      <div className="portfolio">
        <Portfolio />
      </div>
    </Container>

  </React.Fragment>
  return (
    <Router>
      <Routes>
      <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={site} />
      </Routes>
    </Router>
  );
}

export default App;
