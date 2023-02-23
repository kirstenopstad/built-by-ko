import React from "react";
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const Bio = ({ bio }) => {

  return(
    <React.Fragment>

      <Col>
      <div className="about-text">
        {bio.map((element, index) => 
          <p key={index}> {element} </p>
        )}
      </div>
      </Col>
    </React.Fragment>
  );
}

Bio.propTypes = {
  bio: PropTypes.array,
}

export default Bio