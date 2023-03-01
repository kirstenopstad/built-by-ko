import React from 'react';
import './App.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
// import UpdatePortfolio from '../components/UpdatePortfolio'
import UpdatePortfolioControl from '../components/UpdatePortfolioControl'
import Container from 'react-bootstrap/Container';
import SignIn from "./SignIn";
import { auth } from "./../firebase.js";
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
        <Route path="/update-portfolio" element={<UpdatePortfolioControl />} />
        <Route path="/" element={site} />
      </Routes>
    </Router>
  );
}

export default App;
