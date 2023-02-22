import React from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Project = ({project}) => {
  const {title, tagline, description, techUsed, liveLink, gitLink, image} = project;
  return(
    
    <React.Fragment>
      <Col className="project">
      <div >
        <Card>
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Body>
          <Card.Title>
            <h4>{title}</h4>
            <h5>{tagline}</h5>
          </Card.Title> 
          <Card.Text className="project-summary">
            <p>{description}</p>
            <h5>Tech Used</h5>
            <ul>
              {techUsed.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
            <a href={liveLink}>Live</a>
            <a href={gitLink}>Git Repo</a>
          </Card.Text>
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