import React from "react";
import Table from 'react-bootstrap/Table';
import portfolio from "../portfolioSeedData";
import AllProjects from "./AllProjects";
import ProjectDetail from "./ProjectDetail";
import AddProject from "./AddProject";
import {db, auth} from './../firebase'
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { PropTypes } from "prop-types";

const UpdatePortfolioControl = ({projectList}) => {

  const handleProjectSubmit = async (project) => {
    const projectCollectionRef = collection(db, "projects");
    await addDoc(projectCollectionRef, project)
  }

  if (auth.currentUser != null) {
    return(
      <div>
        <h1>Update Portfolio</h1>
        <AllProjects portfolio={projectList} />
        <ProjectDetail project={projectList[0]} />
        <AddProject addProject={handleProjectSubmit} />
      </div>
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
