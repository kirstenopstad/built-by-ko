import React from "react";
import Table from 'react-bootstrap/Table';


const AllProjects = ({portfolio}) => {
  return(
    <div>
      <h1>All Projects</h1>
      <Table responsive="sm" bordered="true">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tech Used</th>
            <th>Live Link</th>
            <th>Github Link</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((project, index) =>
          <tr className="boh-row" key={index}>
            <td>{project.title}</td>
            <td>{project.description}</td>
            <td>{project.techUsed}</td>
            <td>{project.liveLink}</td>
            <td>{project.gitLink}</td>
            <td>{project.image}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  )
}

export default AllProjects;
