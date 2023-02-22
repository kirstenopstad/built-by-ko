import React from "react";
import Col from 'react-bootstrap/Col';

const Bio = ({ bio }) => {

  return(
    <React.Fragment>

      <Col>
      <div className="about-text">
        <p>{bio}</p>
      </div>
      </Col>
    </React.Fragment>
  );
}

export default Bio