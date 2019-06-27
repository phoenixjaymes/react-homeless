import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

const Header = () => (
  <header className="bg-hmlss-blue mb-3 mb-sm-3">
    <Container>
      <Navbar bg="hmlss-blue" variant="dark" expand="md" collapseOnSelect="true">
        <Navbar.Brand to="/" as={NavLink}>Homeless Needs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto">
            <Nav.Link exact as={NavLink} href="/" to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} href="/about" to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} href="/help" to="/help">Help</Nav.Link>
            <Nav.Link as={NavLink} href="/news" to="/news">News</Nav.Link>
            <Nav.Link as={NavLink} href="/contact" to="/contact">Contact</Nav.Link>

            <NavDropdown title="Resources" id="basic-nav-dropdown" variant="hmlss">
              <NavDropdown.Item as={NavLink} href="/agencies" to="/agencies">Agencies</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/clothing" to="/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/housing" to="/housing">Housing</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/meals" to="/meals">Meals</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/recovery" to="/recovery">Recovery</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/shelther" to="/shelter">Shelter</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/veteran" to="/veteran">Veteran</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);


export default Header;
