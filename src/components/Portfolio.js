import React, {useEffect, useState} from "react";
import List from '../components/List'
import { PropTypes } from "prop-types";
import Button from 'react-bootstrap/Button';



const Portfolio = ({projectList}) => {
  const [showJavaScript, setShowJavaScript] = useState(false);
  const [showReact, setShowReact] = useState(false);
  // const [showDotNet, setShowDotNet] = useState(false);
  // const [showPython, setShowPython] = useState(false);
  const [techSelected, setTechSelected] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  // TECH
  const jS =  "JavaScript";
  const react =  "React";
  // const allTech = [jS, react]
  // const allHooks = [showJavaScript, showReact]

  // handle click functions
  const handleJSClick = () => {
    setShowJavaScript(!showJavaScript);
  }

  const handleReactClick = () => {
    setShowReact(!showReact);
  }

  // conditional button rendering
  // result = condition ? true : false
  const JSButtonVariant = showJavaScript ? "secondary" : "outline-secondary";
  let ReactButtonVariant = showReact ? "secondary" : "outline-secondary";
  
  // modify techSelected
  useEffect(() => {
    if (showJavaScript) {
      // add js to techSelected
      const techList = [...techSelected, jS];
      console.log(techList)
      setTechSelected(techList);
    } else {
      const index = techSelected.indexOf(jS);
      if (index >= 0) {
        const techList = [...techSelected];
        techList.splice(index, 1)
        setTechSelected(techList);
      }
    }
  }, [showJavaScript])
 
  useEffect(() => {
    if (showReact) {
      // add js to techSelected
      const techList = [...techSelected, react];
      console.log(techList)
      setTechSelected(techList);
    } else {
      const index = techSelected.indexOf(react);
      if (index >= 0) {
        const techList = [...techSelected];
        techList.splice(index, 1)
        setTechSelected(techList);
      }
    }
  }, [showReact])

  // conditional filtering
  useEffect(() => { 
    let filteredProjs = [];
    techSelected.forEach((tech) => {
      // copy in projects from previous step + add new tech
      filteredProjs = [...filteredProjs, projectList.filter(p => p.techUsed.includes(tech))]
    })
    setFilteredProjects(filteredProjs)
  }, [techSelected])

  // if anything is selected, filter from 
  // let filteredProjects = [];
  // if (techSelected.length > 0) {
  //   techSelected.forEach((tech) => {
  //     // copy in projects from previous step + add new tech
  //     filteredProjects = [...filteredProjects, projectList.filter(p => p.techUsed.includes(tech))]
  //   })
  // }

  // conditionally render project lists
  let projList = <List portfolio={projectList}/>;
  if (filteredProjects.length > 0) {
    projList = <List portfolio={filteredProjects}/>
  }
  return(
    <React.Fragment>
        <h2 className="section">Portfolio</h2>
        <Button variant={JSButtonVariant} size="sm" onClick={handleJSClick}>JavaScript</Button>
        <Button variant={ReactButtonVariant} size="sm" onClick={handleReactClick}>React</Button>
        <Button variant="outline-secondary" size="sm">.Net</Button>
        <Button variant="outline-secondary" size="sm">Python</Button>
        {' '}
        {/* <List portfolio={filteredProjects}/> */}
        {projList}
      {/* <Detail /> */}
    </React.Fragment>
  );
}
Portfolio.propTypes = {
  projectList: PropTypes.array
}

export default Portfolio