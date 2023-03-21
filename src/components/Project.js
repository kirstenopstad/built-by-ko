import React, {useState} from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const Project = ({project}) => {
  // state variables / hooks
  const [imageURL, setImageURL] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [open, setOpen] = useState(false);

  // deconstruct prop object
  const {title, tagline, description, techUsed, liveLink, gitLink, image} = project;

  // GET IMAGE
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  // const storageRef = ref(storage);

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
      <div>
        <Card className="text-white">
          <Card.Img className="mask-img" variant="top" src={imageURL} alt={title}/>
          {imageError}
          <Card.ImgOverlay>
            <Card.Title>
              <h4>{title}</h4>
              <h5>{tagline}</h5>
            </Card.Title> 
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-project-detaials"
                aria-expanded={open}
                variant="outline-light">
                Read More
              </Button>
              <div className="project-links">
                <Button variant="outline-light" size="sm" as="a" href={liveLink}>Live</Button>
                <Button variant="outline-light" size="sm" as="a" href={gitLink}>GitHub</Button>
              </div>
          </Card.ImgOverlay>
              <Collapse in={open}>
                <div className="project-details" id="collapse-project-detaials">
                  <Card.Text>
                    {description}
                  </Card.Text>
                  <h5>Tech Used</h5>
                  <ul>
                    {techUsed.map((element, index) => <li key={index}>{element}</li>)}
                  </ul>
                </div>
              </Collapse>
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