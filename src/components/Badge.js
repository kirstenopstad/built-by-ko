import React from "react";

const Badge = ({ profile }) => {
  const { image, interests, hobbies, skills } = profile
  return(
    <React.Fragment>
      <div class="col-5">
        <div class="row">
          <div class="col-12" id="about-photo">
            <img src={image} width="300px" alt="Profile" />
          </div>
        </div>
        <div class="row">
              <div class="about-badge col-12">
                <br />
                Interests
                <ul> 
                  {interests.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
              </div>
        </div>
        <div class="row">
            <div class="about-badge col-6">
              Hobbies
              <ul> 
                {hobbies.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
            </div>
            <div class="about-badge col-6">
              Skills
              <ul> 
                {skills.map((element, index) => <li key={index}>{element}</li>)}
              </ul>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Badge