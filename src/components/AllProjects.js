import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const AllProjects = ({portfolio, handleAddProjectClick}) => {
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
            <td>Edit | Delete</td>
          </tr>
        )}
        </tbody>
      </Table>
      <Button onClick={handleAddProjectClick} >Add Project</Button>
    </div>
  )
}

export default AllProjects;
