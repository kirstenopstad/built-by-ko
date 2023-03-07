import React, {useState, useEffect} from 'react';
import './App.css';
import Header from '../components/Header'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
// import UpdatePortfolio from '../components/UpdatePortfolio'
import UpdatePortfolioControl from '../components/UpdatePortfolioControl'
import Container from 'react-bootstrap/Container';
import SignIn from "./SignIn";
import { db, auth } from "./../firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc, onSnapshot } from 'firebase/firestore'



function App() {
// state variables
const [error, setError] = useState(null);
const [projectList, setProjectList] = useState([]);

// GET PROJECTS
useEffect(() => { 
  const unSubscribe = onSnapshot(
    collection(db, "projects"), 
    (collectionSnapshot) => {
      const projects = [];
      collectionSnapshot.forEach((doc) => {
        projects.push({
          ...doc.data(),
          id: doc.id
        })
      })
      setProjectList(projects);
    }, 
    (error) => {
      setError(error.message);
    }
  );
  return () => unSubscribe();
}, []);



  const site = 
  <React.Fragment>
    <Header />
    <Container fluid>
      <Profile />
      <div className="portfolio">
        <Portfolio 
          projectList={projectList}
        />
      </div>
    </Container>
  </React.Fragment>


  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/update-portfolio" element={
          <UpdatePortfolioControl 
          projectList={projectList}
          />} 
        />
        <Route path="/" element={site} />
      </Routes>
    </Router>
  );
}

export default App;
