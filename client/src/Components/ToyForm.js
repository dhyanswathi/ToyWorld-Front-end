import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const ToyForm = () => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  let navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();
    axios.post(`https://localhost:7035/api/toys/`, {
      name,
      description,
      imageUrl
    });
    navigate("/");
}

  return (
    <Container>
      <div className='toy-listing'>
      <Row>
      <Col>
      <Form>
      <Form.Group className="mb-3" controlId="ToyToAdd">
        <Form.Label>Name of the toy</Form.Label>
        <Form.Control type="text" placeholder="Name of the toy" onChange={(e) => setName(e.target.value)} />
      </Form.Group>
	   <Form.Group className="mb-3" controlId="DescriptionToAdd">
        <Form.Label>Add description</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" placeholder="Add description" onChange={(e) => setDescription(e.target.value)}  />
      </Form.Group>
	  <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload image of the toy</Form.Label>
        <Form.Control type="file" onChange={(e)=> setImageUrl(e.target.files[0].name)} />
      </Form.Group>
      <Button variant="primary" type="submit" id='btnAddTodo' onClick={postData}>
        Add
      </Button>
    </Form> 
      </Col>
      <Col></Col>
      </Row>
    </div>
    </Container>   
  );
};

export default ToyForm;