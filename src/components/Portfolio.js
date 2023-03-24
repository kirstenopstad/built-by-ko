import React, {useEffect, useState} from "react";
import List from '../components/List'
import { PropTypes } from "prop-types";
import Button from 'react-bootstrap/Button';

const Portfolio = ({projectList}) => {
  const [showJavaScript, setShowJavaScript] = useState(false);
  const [showReact, setShowReact] = useState(false);
  // const [showDotNet, setShowDotNet] = useState(false);
  // const [showPython, setShowPython] = useState(false);
  
  // TECH
  const jS =  "JavaScript";
  const react =  "React";

  // TECH LIST
  const techObject = {
    'JavaScript': showJavaScript,
    'React': showReact,
  }

  const getTechSelected = () => {
    let techList = [];
    // for each entry in the techObj
    Object.entries(techObject).forEach(([key, value]) => {
      // convery keys & vals to useful names
      const tech = key;
      const showState = value;
      // console log to check
      console.log(`tech: ${tech}`)
      console.log(`showState: ${showState}`)
      // if showState value is true, add tech to array
      if (showState === true) {
        console.log(`showState is true! Current tech list: ${techList}`)
        techList = [...techList, tech]
      } else {
        // if showState value is FALSE, don't change anything
        console.log(`showState is false! Current tech list: ${techList}`)
      }
      
    })
    // return techList
    console.log(techList)
    return techList
  }

  const techSelected = getTechSelected(techObject)
  console.log(techSelected)
  console.log(getTechSelected(techObject))

  // const getTechSelected = (techObject) => {
  //   let techSelected = [];
  //   Object.entries(techObject).forEach(([key, value]) => { 
  //     const tech = key;
  //     const showState = value;
  //     getTechSelected(value, key)
  //     if (showState) {
  //       // if show tech is TRUE, add tech to techSelected
  //       console.log(`${techSelected}`)
  //       return [...techSelected, tech];
  //     } else {
  //       // if show tech is FALSE, remove from techSelected
  //       const index = techSelected.indexOf(tech);
  //       if (index >= 0) {
  //         const techList = [...techSelected];
  //         techList.splice(index, 1)
  //         console.log(`${techList}`)
  //         return techList;
  //       } else {
  //         console.log(`${techSelected}`)
  //         return techSelected
  //       }
  //     }
  //   }) 
  // }


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
  let filteredProjects = [];
  if (techSelected.length > 0) {
    techSelected.forEach((tech) => {
      // copy in projects from previous step + add new tech
      filteredProjects = [...filteredProjects, projectList.filter(p => p.techUsed.includes(tech))]
    })
  }

  // conditionally filter project list
  // let filteredProjects = [];
  // if (showJavaScript) {
  //   filteredProjects = [...filteredProjects, projectList.filter(p => p.techUsed.includes(jS))]
  // } 
  // if (showReact) {

  // }

  // conditionally display either filtered or non-filtered project list
  if (techSelected.length > 0) {
    techSelected.forEach((tech) => {
      // filter out
      projectList = projectList.filter(p => p.techUsed.includes(tech))
    })   
  }


  return(
    <React.Fragment>
        <h2 className="section">Portfolio</h2>
        <Button variant={JSButtonVariant} size="sm" onClick={handleJSClick}>JavaScript</Button>
        <Button variant={ReactButtonVariant} size="sm" onClick={handleReactClick}>React</Button>
        <Button variant="outline-secondary" size="sm">.Net</Button>
        <Button variant="outline-secondary" size="sm">Python</Button>
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