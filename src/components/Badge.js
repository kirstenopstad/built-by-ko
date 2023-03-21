import React from "react";
import Col from 'react-bootstrap/Col';

const Badge = ({ profile }) => {
  const { image, hobbies, skills, links } = profile
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
              <a href={element.link} key={index}>
                <img src={element.img} alt={linksList[index]}/>
              </a>
            )}
          </div>
          <div className="about-badge-lists">
            <Col>
            <div className="about-bio-list">
              Hobbies
              <ul> 
                {hobbies.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
            </div>
            <div className="about-bio-list">
              Skills
              <ul> 
                {skills.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
            </div>
            </Col>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
}

export default Badge