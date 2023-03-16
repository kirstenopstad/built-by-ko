import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db, auth } from "./../firebase.js";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from 'firebase/firestore'

import closeIcon from  "./../img/icons/x-lg.svg"
import PropTypes from "prop-types";
import Project from "./Project"
import AddProject from "./AddProject";


const ProjectDetail = ({project, handleCloseClick, updateProject}) => {
  const [projectDetails, setProjectDetails] = useState(null)
  const [imageURL, setImageURL] = useState(null);
  const [imgError, setImageError] = useState(null);
  const [Error, setError] = useState(null);

  const {title, tagline, description, techUsed, liveLink, gitLink, image, id} = project;
  // GET IMAGE
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const storageRef = ref(storage);

  // const spaceRef = ref(storage, 'images/space.jpg');
  const imgRef = ref(storage, `${image}`);
  // spaceRef now points to "images/space.jpg"

  // Get download URL for display
  getDownloadURL(imgRef)
    .then((url) => {
      setImageURL(url)
    })
    .catch((error) => {
      setImageError(error.code)
    }) 

  // Handle edit form submission
  const handleEditSubmission = (e) => {
    e.preventDefault();
    // ensure user is logged in
    if (auth.currentUser === null) {
      setError("You must be signed in to update a project.")
    } else {
      let fileRef = null;
      let techArray = null;
      // if image added, upload it & update 
      if (e.target.image.value) {
        let fileType = getFileType(e.target.image.value);
        let fileName = buildRefFileName(e.target.title.value);
        fileRef = addRefFileExt(fileName, fileType);
        let file = document.getElementById("image").files[0] 
        uploadImage (fileRef, file);
      }
      // if tech used added, parse & update
      if (e.target.techUsed.value) {
        techArray = csvToArray(e.target.techUsed.value)
      }
      // update project
      // name: (event.target.name.value) ? (event.target.name.value): name
      updateProject({
        // if new value true,new value : (else) X: X
        title: (e.target.title.value) ? (e.target.title.value): title ,
        tagline: (e.target.tagline.value) ? (e.target.tagline.value): tagline,
        description: (e.target.description.value) ? (e.target.description.value): description,
        techUsed: (techArray) ? techArray : techUsed,
        liveLink: (e.target.liveLink.value) ? (e.target.liveLink.value): liveLink,
        gitLink: (e.target.gitLink.value) ? (e.target.gitLink.value): gitLink,
        image: (fileRef) ? fileRef : image,
        id: id,
      })
      // nullify fields
      e.target.title.value = null;
      e.target.tagline.value = null;
      e.target.description.value = null;
      e.target.techUsed.value = null;
      e.target.liveLink.value = null;
      e.target.gitLink.value = null;
      // document.getElementById("image").value = null;
    }
  }
  
  // Upload image processing
  // get '.jpeg'
  const getFileType = (filename) => {
    // get index of period
    const dotIndex = filename.lastIndexOf('.')
    // get last three characters of file
    const filetype = filename.slice(dotIndex, filename.length)
    // return filetype (i.e. '.jpg')
    return filetype
  }

  // get 'project-images/projectTitle'
  const buildRefFileName = (projectTitle) => {
    const filename = 'project-images/' + projectTitle
    return filename
  }

  // compose 'project-images/projectTitle.jpeg'
  const addRefFileExt = (filename, filetype) => {
    return filename + filetype
  }

  // create reference file for 'project-images/projectTitle.jpeg' in storage
  const uploadImage = (refFile, file) => {
    // Create a root reference
    const storage = getStorage();

    // Create a ref for the file to upload
    const projectImageRef = ref(storage, refFile)

    uploadBytes(projectImageRef, file)
      .then((snapshot) => {
        console.log('uploaded file!')
      })
  }

  // Parse tech used input
  const csvToArray = (string) => {
    const array = string.split(",")
    let result = []
    array.forEach((subString) => {
      result.push(subString.trim())
    })
    return result
  }

  return(
    <div>
      <div className="update-project-header">
        <h2>Project Detail</h2>   
        <img src={closeIcon} onClick={handleCloseClick}/>
      </div>
      <Row xs={1} md={2}>
        <Col>
          <Project project={project}/>
        </Col>
        <Col>
          <Form onSubmit={handleEditSubmission}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              type="text"
              name="title"
              placeholder={project.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tagline">
              <Form.Label>Tagline</Form.Label>
              <Form.Control 
              type="text"
              name="tagline"
              placeholder={project.tagline}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" rows={3}
              type="text"
              name="description"
              placeholder={project.description}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="techUsed">
              <Form.Label>TechUsed</Form.Label>
              <Form.Control 
              type="text"
              name="techUsed"
              placeholder="TechUsed"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="liveLink">
              <Form.Label>LiveLink</Form.Label>
              <Form.Control 
              type="url"
              name="liveLink"
              placeholder={project.liveLink}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="gitLink">
              <Form.Label>GitLink</Form.Label>
              <Form.Control 
              type="url"
              name="gitLink"
              placeholder={project.gitLink}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control 
              type="file"
              accept=".jpg, .jpeg, .png"
              name="image"
              placeholder="Image"/>
            </Form.Group>
            <Button type="submit">Update Project</Button>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  handleCloseClick: PropTypes.func,
  // updateProject: PropTypes.func
}

export default ProjectDetail;
