import React from "react";
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const AllProjects = ({portfolio, handleAddProjectClick, handleEditProjectClick}) => {
  return(
    <div>
      <h1>All Projects</h1>
      <Table responsive="sm" bordered="true">
        <thead>
          <tr>
            <th>Title</th>
            <th>Tagline</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((project, index) =>
          <tr className="boh-row" key={index}>
            <td>{project.title}</td>
            <td>{project.tagline}</td>
            {/* TODO: make these real buttons */}
            <td>
              <Button onClick={() => handleEditProjectClick(project.id)}>Edit</Button> | Delete
            </td>
          </tr>
        )}
        </tbody>
      </Table>
      <Button onClick={handleAddProjectClick} >Add Project</Button>
    </div>
  )
}

AllProjects.propTypes = {
  portfolio: PropTypes.array,
  handleAddProjectClick: PropTypes.func,
  handleEditProjectClick: PropTypes.func,
}

export default AllProjects;
