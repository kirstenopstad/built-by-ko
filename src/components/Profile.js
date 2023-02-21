import React from "react";
import Bio from '../components/Bio'
import Badge from '../components/Badge'
import profileData from '../profileSeedData'

const Profile = () => {
  return(
    <React.Fragment>
      <div className="about">
        <h2 className="section">About</h2>
        <div class="row">
          <Bio bio={profileData.background}/>
          <Badge profile={profileData}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile