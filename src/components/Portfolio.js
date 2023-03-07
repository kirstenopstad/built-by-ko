import React from "react";
import List from '../components/List'
import portfolioData from '../portfolioSeedData'
import { PropTypes } from "prop-types";


const Portfolio = ({projectList}) => {
  return(
    <React.Fragment>
        <h2 className="section">Portfolio</h2>
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