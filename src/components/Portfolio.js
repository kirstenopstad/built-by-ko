import React from "react";
import List from '../components/List'
// import Detail from '../components/Detail'
import portfolioData from '../portfolioSeedData'

const Portfolio = () => {
  return(
    <React.Fragment>
      <List portfolio={portfolioData}/>
      {/* <Detail /> */}
    </React.Fragment>
  );
}

export default Portfolio