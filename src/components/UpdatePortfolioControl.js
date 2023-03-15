import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import portfolio from "../portfolioSeedData";
import AllProjects from "./AllProjects";
import ProjectDetail from "./ProjectDetail";
import AddProject from "./AddProject";
import {db, auth} from './../firebase'
import { Link } from 'react-router-dom'
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { PropTypes } from "prop-types";

const UpdatePortfolioControl = ({projectList}) => {
  const[selectedProject, setSelectedProject] = useState(null)
  const[showAddForm, setShowAddForm] = useState(false)

  const handleProjectSubmit = async (project) => {
    const projectCollectionRef = collection(db, "projects");
    await addDoc(projectCollectionRef, project);
    setShowAddForm(false);
    setSelectedProject(project);
  }
  
  const handleDeleteProject = async (project) => {
    const projectDocRef = doc(db, "projects", project.id);
    await deleteDoc(projectDocRef)
  }

  const handleUpdateProject = async (project) => {
    const projectRef = doc(db, "projects", project.id);
    await updateDoc(projectRef, project);
    setSelectedProject(project)
  }

  const handleAddProjectClick = () => {
    setShowAddForm(true);
  }

  const handleEditProjectClick = (id) => {
    const selectedProject = projectList.filter(p => p.id === id)[0];
    setSelectedProject(selectedProject);
  }

  const handleCloseClick = () => {
    setShowAddForm(false);
    setSelectedProject(null);
  }


  // conditional rendering logic
  let content = <AllProjects 
                  portfolio={projectList} 
                  handleAddProjectClick={handleAddProjectClick}
                  handleEditProjectClick={handleEditProjectClick}
                  handleDeleteProject={handleDeleteProject}
                  />
  if (selectedProject) {
    content = <ProjectDetail 
                project={selectedProject} 
                handleCloseClick={handleCloseClick}
                updateProject={handleUpdateProject}
                />
  } else if (showAddForm) {
    content = <AddProject 
                addProject={handleProjectSubmit} 
                handleCloseClick={handleCloseClick}
                />
  }
  if (auth.currentUser != null) {
    return(
      <Container>
        <div>
          <h1>Update Portfolio</h1>
          {content}
        </div>
      </Container>
    )
  } else {
    return (
      <h2>You must be <Link to="/sign-in">logged in</Link> to update portfolio.</h2>
    )
  }
}

UpdatePortfolioControl.propTypes = {
  projectList: PropTypes.array
}
export default UpdatePortfolioControl;
