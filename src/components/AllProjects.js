import React, {useState} from "react";
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AllProjects = ({portfolio, handleAddProjectClick, handleEditProjectClick, handleDeleteProject}) => {
  const [show, setShow] = useState(false);
  const [deleteProject, setDeleteProject] = useState({title: "title",id: 1});

  const handleClose = () => setShow(false);

  const handleShow = (project) => {
    setShow(true);
    setDeleteProject(project);
  }

  const handleDeleteConfirm = () => {
    handleDeleteProject(deleteProject);
    setDeleteProject({title: "title",id: 1});
    setShow(false);
  }
  
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
              <Button onClick={() => handleEditProjectClick(project.id)} variant="outline-success">Edit</Button>
              {' '}
              <Button onClick={() => handleShow(project)} variant="outline-danger">Delete</Button>
              {/* <Button onClick={() => handleDeleteProject(project)} variant="outline-danger">Delete</Button> */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Project Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {deleteProject.title}?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDeleteConfirm}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
            </td>
          </tr>
        )}
        </tbody>
      </Table>
      
      <Button onClick={handleAddProjectClick} variant="success">Add Project</Button>
    </div>
  )
}

AllProjects.propTypes = {
  portfolio: PropTypes.array,
  handleAddProjectClick: PropTypes.func,
  handleEditProjectClick: PropTypes.func,
  handleDeleteProject: PropTypes.func,
}

export default AllProjects;
