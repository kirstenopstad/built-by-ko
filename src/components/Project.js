import React, {useState} from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Project = ({project}) => {
  // state variables / hooks
  const [imageURL, setImageURL] = useState(null);
  const [imgError, setImageError] = useState(null);

  // deconstruct prop object
  const {title, tagline, description, techUsed, liveLink, gitLink, image} = project;

  // GET IMAGE
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const storageRef = ref(storage);

  // const spaceRef = ref(storage, 'images/space.jpg');
  const imgRef = ref(storage, `${image}`);
  // spaceRef now points to "images/space.jpg"

  // Get download URL for display
  getDownloadURL(imgRef)
    .then((url) => {
      setImageURL(url)
    })
    .catch((error) => {
      setImageError(error.code)
    }) 
  return(
    
    <React.Fragment>
      <Col className="project">
      <div >
        <Card>
          <Card.Img variant="top" src={imageURL} alt={title} />
          <Card.Body>
          <Card.Title>
            <h4>{title}</h4>
            <h5>{tagline}</h5>
          </Card.Title> 
          <Card.Text className="project-summary">
            {description}
          </Card.Text>
            <h5>Tech Used</h5>
            <ul>
              {/* TODO: FIX TECH USED SO IT's AN ARRAY */}
              {/* {techUsed.map((element, index) => <li key={index}>{element}</li>)} */}
            </ul>
            <a href={liveLink}>Live</a>
            <a href={gitLink}>Git Repo</a>
          </Card.Body>
        </Card>
      </div>
      </Col>
    </React.Fragment>
  );
}

Project.propTypes = {
  title: PropTypes.string, 
  tagline: PropTypes.string, 
  description: PropTypes.string, 
  techUsed: PropTypes.array, 
  liveLink: PropTypes.string, 
  gitLink: PropTypes.string, 
  image: PropTypes.string
}

export default Project