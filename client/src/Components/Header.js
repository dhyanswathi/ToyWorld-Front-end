import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
    <Navbar bg="dark" variant="dark">
     <Container>
     <LinkContainer to="/">
  <Navbar.Brand>Toy World</Navbar.Brand>
  </LinkContainer>
      <Nav className="me-auto">
      <LinkContainer to="/">
        <Nav.Link href="#home">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/ToyForm">
        <Nav.Link href="#ToyForm">Add New Toy</Nav.Link>
      </LinkContainer>
      </Nav>
     </Container>
    </Navbar>
    )
}

export default Header;