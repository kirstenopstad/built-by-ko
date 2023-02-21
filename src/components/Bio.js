import React from "react";

const Bio = ({ bio }) => {

  return(
    <React.Fragment>
      <div class="about-text col-7">
        <p>{bio}</p>
      </div>
    </React.Fragment>
  );
}

export default Bio