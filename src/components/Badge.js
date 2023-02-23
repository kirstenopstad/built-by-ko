import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Badge = ({ profile }) => {
  const { image, interests, hobbies, skills, links } = profile
  const linksList = Object.keys(links)
  return(
    <React.Fragment>
      <Col>
        <div className="about-badge">
          <div id="about-photo">
            <img src={image} alt="Profile" />
          </div>
          <div className="icons">
            {Object.values(links).map((element, index) => 
              <a href={element.link}>
                <img src={element.img} alt={linksList[index]}/>
              </a>
            )}
          </div>
          <div className="about-badge-lists">
            <Col>
              Interests
              <ul> 
                {interests.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
              Hobbies
              <ul> 
                {hobbies.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
              Skills
              <ul> 
                {skills.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
            </Col>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
}

export default Badge