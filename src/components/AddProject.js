import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { auth } from "./../firebase.js";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Link } from "react-router-dom";
import { db } from "./../firebase"

const AddProject = ({addProject}) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleProjectSubmission = (e) => {
    e.preventDefault();
    // if not signed in, return error
    if (auth.currentUser == null) {
      setErrorMessage("You must be logged in to submit a project.")
      // setErrorLink(<Link to="/sign-in">Sign in</Link>)
    } else {
      const fileType = getFileType(e.target.image.value);
      const fileName = buildRefFileName(e.target.title.value);
      const fileRef = addRefFileExt(fileName, fileType);
      // const metadata = buildMetadata(fileType)
      const file = document.getElementById("image").files[0] 
      uploadImage (fileRef, file);

      addProject({
        // add values 
        title: e.target.title.value,
        description: e.target.description.value,
        tagline: e.target.tagline.value,
        techUsed: e.target.techUsed.value,
        liveLink: e.target.liveLink.value,
        gitLink: e.target.gitLink.value,
        image: fileRef,
      });
      // nullify fields
        e.target.title.value = null;
        e.target.description.value = null;
        e.target.tagline.value = null;
        e.target.techUsed.value = null;
        e.target.liveLink.value = null;
        e.target.gitLink.value = null;
        document.getElementById("image").value = null;
      }
    }
  
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

  return(
    <div>
      <h1>Add Project</h1>
      {errorMessage}
      <Form onSubmit={handleProjectSubmission}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        type="text"
        name="title"
        placeholder="Title"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="tagline">
        <Form.Label>Tagline</Form.Label>
        <Form.Control 
        type="text"
        name="tagline"
        placeholder="Tagline"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        as="textarea" rows={3}
        type="text"
        name="description"
        placeholder="Description"/>
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
        placeholder="LiveLink"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="gitLink">
        <Form.Label>GitLink</Form.Label>
        <Form.Control 
        type="url"
        name="gitLink"
        placeholder="GitLink"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="file"
        accept=".jpg, .jpeg, .png"
        name="image"
        placeholder="Image"/>
      </Form.Group>
      <Button type="submit">Add Project</Button>
      </Form>
    </div>
  );  
}

export default AddProject