import React from 'react';
import './App.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
import Container from 'react-bootstrap/Container';

function App() {
  return (
   <React.Fragment>
    <Header />
    <Container fluid>
      <Profile />
      <div className="portfolio">
        <Portfolio />
      </div>
    </Container>
   </React.Fragment>
  );
}

export default App;
