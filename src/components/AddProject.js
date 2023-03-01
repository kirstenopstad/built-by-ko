import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { auth } from "./../firebase.js";
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
      addProject({
        // add values 
        title: e.target.title.value,
        description: e.target.description.value,
        techUsed: e.target.techUsed.value,
        liveLink: e.target.liveLink.value,
        gitLink: e.target.gitLink.value,
        image: e.target.image.value,
      });
      // nullify fields
        // e.target.title.value = null,
        // e.target.description.value = null,
        // e.target.techUsed.value = null,
        // e.target.liveLink.value = null,
        // e.target.gitLink.value = null,
        // e.target.image.value = null
      }
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
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control 
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
        name="image"
        placeholder="Image"/>
      </Form.Group>
      <Button type="submit">Add Project</Button>
      </Form>
    </div>
  );  
}

export default AddProject