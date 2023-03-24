import React, {useEffect, useState} from "react";
import List from '../components/List'
import { PropTypes } from "prop-types";
import Button from 'react-bootstrap/Button';

const Portfolio = ({projectList}) => {
  const [showJavaScript, setShowJavaScript] = useState(false);
  const [showReact, setShowReact] = useState(false);
  const [showDotNet, setShowDotNet] = useState(false);
  const [showPython, setShowPython] = useState(false);

  // TECH LIST
  const techObject = {
    'JavaScript': showJavaScript,
    'React': showReact,
    'C#': showDotNet,
    'Python': showPython
  }

  const getTechSelected = () => {
    let techList = [];
    // for each entry in the techObj
    Object.entries(techObject).forEach(([key, value]) => {
      // convery keys & vals to useful names
      const tech = key;
      const showState = value;
   
      // if showState value is true, add tech to array
      if (showState === true) {
        techList = [...techList, tech]
      } 
      
    })
    // return techList
    return techList
  }

  const techSelected = getTechSelected(techObject)

  // handle click functions
  const handleJSClick = () => {
    setShowJavaScript(!showJavaScript);
  }
  
  const handleReactClick = () => {
    setShowReact(!showReact);
  }

  const handleDotNetClick = () => {
    setShowDotNet(!showDotNet);
  }

  const handlePythonClick = () => {
    setShowPython(!showPython);
  }

  // conditional button rendering
  // result = condition ? true : false
  const JSButtonVariant = showJavaScript ? "secondary" : "outline-secondary";
  let ReactButtonVariant = showReact ? "secondary" : "outline-secondary";
  let DotNetButtonVariant = showDotNet ? "secondary" : "outline-secondary";
  let PythonButtonVariant = showPython ? "secondary" : "outline-secondary";

  // initialize empty filtered projects array
  let filteredProjects = [];
  // if there is any tech selected, do this
  if (techSelected.length > 0) {
    // for each technology in techSelected
    techSelected.forEach((tech) => {
      // get tech-specific projects
      const techProjects = projectList.filter(p => p.techUsed.includes(tech))
      // add tech-specific project to filtered project array
      filteredProjects = [...filteredProjects, ...techProjects]
    })
  }
  
  // conditionally display either filtered or non-filtered project list
  if (techSelected.length > 0) {
    projectList = [...new Set(filteredProjects)] 
  }


  return(
    <React.Fragment>
        <h2 className="section">Portfolio</h2>
        <Button variant={JSButtonVariant} size="sm" onClick={handleJSClick}>JavaScript</Button>
        <Button variant={ReactButtonVariant} size="sm" onClick={handleReactClick}>React</Button>
        <Button variant={DotNetButtonVariant} size="sm" onClick={handleDotNetClick}>.Net</Button>
        <Button variant={PythonButtonVariant} size="sm" onClick={handlePythonClick}>Python</Button>
        {' '}
        <List portfolio={projectList}/>
      {/* <Detail /> */}
    </React.Fragment>
  );
}
Portfolio.propTypes = {
  projectList: PropTypes.array
}

export default Portfolio