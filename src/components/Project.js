import React from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Project = ({project}) => {
  const {title, tagline, description, techUsed, liveLink, gitLink, image} = project;
  // <Col className="inventory-card">
  //       <Card style={{ width: '18rem' }}>
  //         <Card.Img variant="top" src={img}/>
  //         <Card.Body>
  //           <Card.Title>{name}</Card.Title>
  //           <Card.Text>
  //             {summary}
  //           </Card.Text>
  //           <p>{origin} ${price} {roast}</p>
  //           <p>{stock}</p>
  //         <form onSubmit={handleSellClick}>
  //             <Button variant="secondary"  onClick={() => onItemClick(id)}>Details</Button>
  //             <Button variant={sellButtonStatus} type="submit">{sellButtonText}</Button>
  //         </form>
  //         </Card.Body>
  //       </Card>
  //     </Col>
  return(

    
    <React.Fragment>
      <Col>
      <div className="project">
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