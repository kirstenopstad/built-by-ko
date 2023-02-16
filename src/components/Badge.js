import React from "react";

const Badge = ({ profile }) => {
  const { image, interests, hobbies, skills } = profile
  return(
    <React.Fragment>
      <img src={image} width="300px" alt="Profile" />
      <br />
      Interests
      <ul> 
        {interests.map((element) => <li>{element}</li>)}
      </ul>

      Hobbies
      <ul> 
        {hobbies.map((element) => <li>{element}</li>)}
      </ul>
      Skills
      <ul> 
        {skills.map((element) => <li>{element}</li>)}
      </ul>

    </React.Fragment>
  );
}

export default Badge