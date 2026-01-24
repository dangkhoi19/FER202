// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>🍕 Pizza Delicious</h5>
            <p className="text-muted">
              Serving the best pizzas since 2024. 
              Fresh ingredients, authentic recipes.
            </p>
          </Col>
          
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/menu" className="text-white text-decoration-none">Menu</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5>Contact Info</h5>
            <p className="mb-1">📍 123 Pizza Street, Hanoi</p>
            <p className="mb-1">📞 (024) 1234-5678</p>
            <p className="mb-1">✉️ info@pizzadelicious.com</p>
            <p>⏰ Open: 10AM - 10PM Daily</p>
          </Col>
        </Row>
        
        <hr className="bg-white" />
        
        <Row className="text-center">
          <Col>
            <p className="mb-0">
              © 2024 Pizza Delicious - FER202 Project. 
              This project is for educational purposes.
            </p>
            <p className="text-muted">
              Student: [Your Name] | Class: FER202
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;