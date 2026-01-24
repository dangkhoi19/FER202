// src/components/Header.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Bell } from 'react-feather';

function Header() {
  const [cartCount] = useState(3);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">
          <span className="pizza-spin" style={{ display: 'inline-block', marginRight: '10px' }}>
            🍕
          </span>
          Pizza<span className="text-warning">Delicious</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-2 fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="mx-2 fw-semibold">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/specials" className="mx-2 fw-semibold">
              Specials
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2 fw-semibold">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2 fw-semibold">
              Contact
            </Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0">
                <Search size={18} />
              </span>
              <FormControl
                type="search"
                placeholder="Search pizzas..."
                className="border-start-0"
                style={{ minWidth: '250px' }}
              />
            </div>
          </Form>

          {/* Icons */}
          <div className="d-flex align-items-center">
            <Button variant="outline-danger" className="me-2 position-relative">
              <Bell size={20} />
              <Badge 
                bg="danger" 
                pill 
                className="position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: '0.6rem' }}
              >
                2
              </Badge>
            </Button>

            <Button variant="outline-secondary" className="me-3">
              <User size={20} />
            </Button>

            <Button variant="danger" className="position-relative">
              <ShoppingCart size={20} />
              <Badge 
                bg="warning" 
                pill 
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
              <span className="ms-2 d-none d-md-inline">Cart</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;