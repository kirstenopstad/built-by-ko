import React, {useState} from 'react';
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
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function App() {
const [imageURL, setImageURL] = useState(null);
const [imgError, setImageError] = useState(null);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);

// Create a child ref
const imageRef = ref(storage, 'images');
// imageRef now points to the whole folder 'images'

// Can also take specifc filename 
// const spaceRef = ref(storage, 'images/space.jpg');
const testRef = ref(storage, 'project-images/test.jpg');
// spaceRef now points to "images/space.jpg"

// Get downloard URL for display
getDownloadURL(testRef)
  .then((url) => {
    setImageURL(url)
  })
  .catch((error) => {
    setImageError(error.code)
  }) 

  const site = 
  <React.Fragment>
    <p>{imgError}</p>
    <img src={imageURL}/>
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
