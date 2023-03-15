import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import closeIcon from  "./../img/icons/x-lg.svg"
import PropTypes from "prop-types";


const ProjectDetail = ({project, handleCloseClick}) => {
  const [imageURL, setImageURL] = useState(null);
  const [imgError, setImageError] = useState(null);

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
    <div>
      <div className="d-flex">
        <h1>Project Detail</h1>   
        <img src={closeIcon} onClick={handleCloseClick}/>
      </div>

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
              {techUsed.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
            <a href={liveLink}>Live</a>
            <a href={gitLink}>Git Repo</a>
          </Card.Body>
        </Card>
      </div>
      </Col>

    </div>
  )
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  handleCloseClick: PropTypes.func
}

export default ProjectDetail;
