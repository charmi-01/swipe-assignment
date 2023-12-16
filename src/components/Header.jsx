import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar className="bg-body-tertiary "  expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold fs-3">Swipe Assignment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" fs-5 mx-3">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active text-primary' : ''}>Invoices</Nav.Link>
            <Nav.Link as={Link} to="/products" className={location.pathname === '/products' ? 'active text-primary' : ''}>Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
