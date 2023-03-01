import React from "react";
import Table from 'react-bootstrap/Table';
import portfolio from "../portfolioSeedData";
import AllProjects from "./AllProjects";
import ProjectDetail from "./ProjectDetail";
import AddProject from "./AddProject";
import {db} from './../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import img from './../img/portfolio/mr-robogers.png'


const UpdatePortfolioControl = () => {

  const handleProjectSubmit = async (project) => {
    const projectCollectionRef = collection(db, "projects");
    await addDoc(projectCollectionRef, project)
  }

  return(
    <div>
      <h1>Update Portfolio</h1>
      <p>Back-of-house update functionality coming soon.</p>
      <AllProjects portfolio={portfolio} />
      <ProjectDetail project={portfolio[0]} />
      <AddProject addProject={handleProjectSubmit} />
    </div>
  )
}

export default UpdatePortfolioControl;
