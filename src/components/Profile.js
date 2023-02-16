import React from "react";
import Bio from '../components/Bio'
import Badge from '../components/Badge'
import profileData from '../profileSeedData'

const Profile = () => {
  return(
    <React.Fragment>
      <Bio bio={profileData.background}/>
      <Badge profile={profileData}/>
    </React.Fragment>
  );
}

export default Profile