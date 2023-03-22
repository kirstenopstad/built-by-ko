import React, {useEffect, useState} from "react";
import List from '../components/List'
import { PropTypes } from "prop-types";
import Button from 'react-bootstrap/Button';



const Portfolio = ({projectList}) => {
  const [showJavaScript, setShowJavaScript] = useState(false);
  // const [showReact, setShowReact] = useState(false);
  // const [showDotNet, setShowDotNet] = useState(false);
  // const [showPython, setShowPython] = useState(false);
  const [techSelected, setTechSelected] = useState([])

  // TECH
  const jS =  "JavaScript";

  // handle click functions
  const handleJSClick = () => {
    setShowJavaScript(!showJavaScript);
  }

  // conditional button rendering
  let JSButtonVariant = null;
  // if js button not selected
  if (!showJavaScript) {
    // toggle styling to secondary
    JSButtonVariant = "outline-secondary";
    // if js button is selected
  } else {
    JSButtonVariant = "secondary";
  }
  
  // modify tech Selected
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

  // conditional filtering

  
  // if anything is selected, filter from 
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
        <Button variant="outline-secondary" size="sm">React</Button>
        <Button variant="outline-secondary" size="sm">.Net</Button>
        <Button variant="outline-secondary" size="sm">Python</Button>
        {' '}
        {/* <List portfolio={portfolioData}/> */}
        <List portfolio={projectList}/>
      {/* <Detail /> */}
    </React.Fragment>
  );
}
Portfolio.propTypes = {
  projectList: PropTypes.array
}

export default Portfolio