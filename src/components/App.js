import React from 'react';
import './App.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'

function App() {
  return (
   <React.Fragment>
    <Header />
    <Profile />
    <Portfolio />
   </React.Fragment>
  );
}

export default App;
