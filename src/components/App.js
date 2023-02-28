import React from 'react';
import './App.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
// import UpdatePortfolio from '../components/UpdatePortfolio'
import PortfolioControl from '../components/UpdatePortfolioControl'
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
  let boh = null;

  // TODO: Make this specific to my UID
  if (auth.currentUser != null) {
    boh = <PortfolioControl />
  } else if (auth.currentUser == null) {
    boh = <SignIn />
  }

    

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/update-portfolio" element={boh} />
        <Route path="/" element={site} />
      </Routes>
    </Router>
  );
}

export default App;
