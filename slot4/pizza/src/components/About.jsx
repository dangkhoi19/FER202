// src/components/About.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">About Pizza Delicious 🍕</h1>
      
      <Row className="mb-5">
        <Col md={6}>
          <h2>Our Story</h2>
          <p className="lead">
            Founded in 2024, Pizza Delicious started with a simple mission: 
            to serve the most delicious, authentic pizzas using only the 
            freshest ingredients.
          </p>
          <p>
            Our secret? A family recipe passed down for generations, combined 
            with modern cooking techniques and a passion for perfection.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="Pizza making"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
      
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <div className="display-4 mb-3">🍅</div>
              <Card.Title>Fresh Ingredients</Card.Title>
              <Card.Text>
                We source only the freshest vegetables, meats, and cheeses 
                from local suppliers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <div className="display-4 mb-3">👨‍🍳</div>
              <Card.Title>Expert Chefs</Card.Title>
              <Card.Text>
                Our chefs have over 20 years of experience in Italian cuisine 
                and pizza making.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <div className="display-4 mb-3">🚚</div>
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                Hot and fresh pizza delivered to your door in under 30 minutes 
                or it's free!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="mt-5 p-4 bg-light rounded">
        <h3 className="text-center">Our Values</h3>
        <Row className="text-center mt-4">
          <Col md={3}>
            <h5>Quality</h5>
            <p>Never compromise on ingredients</p>
          </Col>
          <Col md={3}>
            <h5>Tradition</h5>
            <p>Authentic Italian recipes</p>
          </Col>
          <Col md={3}>
            <h5>Innovation</h5>
            <p>Creative new flavors</p>
          </Col>
          <Col md={3}>
            <h5>Community</h5>
            <p>Supporting local businesses</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;