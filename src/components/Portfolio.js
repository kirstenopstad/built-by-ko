import React from "react";
import List from '../components/List'
// import Detail from '../components/Detail'
import portfolioData from '../portfolioSeedData'

const Portfolio = () => {
  return(
    <React.Fragment>
        <h2 class="section">Portfolio</h2>
        <List portfolio={portfolioData}/>
      {/* <Detail /> */}
    </React.Fragment>
  );
}

export default Portfolio