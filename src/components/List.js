import React from "react";
import Project from '../components/Project'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row';

const List = ({portfolio}) => {
  return(
    <React.Fragment>
      <Row xs={1} md={1} lg={2} className="g-4">
        {portfolio.map(project => 
          <Project project={project}
          // TODO: assign projects UUID
          key={project.title}/>
        )}
      </Row>
    </React.Fragment>
  );
}
List.propTypes = {
  portfolio: PropTypes.array
}
export default List