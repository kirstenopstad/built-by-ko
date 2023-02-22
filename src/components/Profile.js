import React from "react";
import Bio from '../components/Bio'
import Badge from '../components/Badge'
import profileData from '../profileSeedData'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Profile = () => {
  return(
    <React.Fragment>
      <Container >
        <div className="about">
          <h2 className="section">About</h2>
          <Row xs={1} md={1} lg={2} className="about-content">
            <Bio bio={profileData.background}/>
            <Badge profile={profileData}/>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Profile