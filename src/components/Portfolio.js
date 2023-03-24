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
  // const [filteredProjects, setFilteredProjects] = useState([])

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
  
  // modify techSelected if js show = true

  // move out of useEffect
  const handleJs = () => {
    if (showJavaScript) {
       // add js to techSelected
       const techList = [...techSelected, jS];
       setTechSelected(techList);
    } else {
      // if in techSelected, remove it
      const index = techSelected.indexOf(jS);
      if (index >= 0) {
        const techList = [...techSelected];
        techList.splice(index, 1)
        setTechSelected(techList);
      }
    }
  }

  const tech = () => {

  }

  // useEffect(() => {
  //   if (showJavaScript) {
  //     // add js to techSelected
  //     const techList = [...techSelected, jS];
  //     console.log(techList)
  //     setTechSelected(techList);
  //   } else {
  //     const index = techSelected.indexOf(jS);
  //     if (index >= 0) {
  //       const techList = [...techSelected];
  //       techList.splice(index, 1)
  //       setTechSelected(techList);
  //     }
  //   }
  // }, [showJavaScript, techSelected])
  
  // // modify techSelected if react show = true
  // useEffect(() => {
  //   if (showReact) {
  //     // add react to techSelected
  //     const techList = [...techSelected, react];
  //     console.log(techList)
  //     setTechSelected(techList);
  //   } else {
  //     const index = techSelected.indexOf(react);
  //     if (index >= 0) {
  //       const techList = [...techSelected];
  //       techList.splice(index, 1)
  //       setTechSelected(techList);
  //     }
  //   }
  // }, [showReact, techSelected])

  // conditional filtering if techSelected changes
  // useEffect(() => { 
  //   let filteredProjs = [];
  //   techSelected.forEach((tech) => {
  //     // copy in projects from previous step + add new tech
  //     filteredProjs = [...filteredProjs, projectList.filter(p => p.techUsed.includes(tech))]
  //   })
  //   setFilteredProjects(filteredProjs)
  // }, [techSelected])

  // if anything is selected, filter from 
  // let filteredProjects = [];
  // if (techSelected.length > 0) {
  //   techSelected.forEach((tech) => {
  //     // copy in projects from previous step + add new tech
  //     filteredProjects = [...filteredProjects, projectList.filter(p => p.techUsed.includes(tech))]
  //   })
  // }

  // conditionally filter project list
  // let filteredProjects = [];
  // if (showJavaScript) {
  //   filteredProjects = [...filteredProjects, projectList.filter(p => p.techUsed.includes(jS))]
  // } 
  // if (showReact) {

  // }

  // conditionally display either filtered or non-filtered project list
  // if (techSelected.length > 0) {
  //   techSelected.forEach((tech) => {
  //     // filter out
  //     projectList = projectList.filter(p => p.techUsed.includes(tech))
  //   })   
  // }


  return(
    <React.Fragment>
        <h2 className="section">Portfolio</h2>
        <Button variant={JSButtonVariant} size="sm" onClick={handleJSClick}>JavaScript</Button>
        <Button variant={ReactButtonVariant} size="sm" onClick={handleReactClick}>React</Button>
        <Button variant="outline-secondary" size="sm">.Net</Button>
        <Button variant="outline-secondary" size="sm">Python</Button>
        {' '}
        <List portfolio={projectList}/>
        {/* <List portfolio={filteredProjects}/> */}
      {/* <Detail /> */}
    </React.Fragment>
  );
}
Portfolio.propTypes = {
  projectList: PropTypes.array
}

export default Portfolio