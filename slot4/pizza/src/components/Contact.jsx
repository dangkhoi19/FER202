// src/components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    pizzaType: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Us 📞</h1>
      
      {submitted && (
        <Alert variant="success" className="text-center">
          Thank you! Your message has been sent. We'll contact you soon.
        </Alert>
      )}
      
      <Row>
        <Col md={6}>
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <h3>Get in Touch</h3>
            <p className="text-muted">
              Have questions about our pizzas? Want to place a large order? 
              Contact us using the form or information below.
            </p>
            
            <div className="mt-4">
              <h5>📍 Our Location</h5>
              <p>
                123 FPT Street<br />
                Food District, DANANG 100000<br />
                Vietnam
              </p>
            </div>
            
            <div className="mt-4">
              <h5>📞 Contact Info</h5>
              <p>
                <strong>Phone:</strong> (024) 1234-5678<br />
                <strong>Email:</strong> info@pizzadelicious.com<br />
                <strong>Delivery Hotline:</strong> 1900-1234
              </p>
            </div>
            
            <div className="mt-4">
              <h5>⏰ Opening Hours</h5>
              <p>
                Monday - Friday: 10:00 AM - 10:00 PM<br />
                Saturday - Sunday: 9:00 AM - 11:00 PM
              </p>
            </div>
          </div>
        </Col>
        
        <Col md={6}>
          <div className="p-4 border rounded shadow-sm h-100">
            <h3 className="mb-4">Send us a Message</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </Form.Group>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0123-456-789"
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Favorite Pizza Type</Form.Label>
                <Form.Select
                  name="pizzaType"
                  value={formData.pizzaType}
                  onChange={handleChange}
                >
                  <option value="">Select a pizza</option>
                  <option value="margherita">Margherita</option>
                  <option value="pepperoni">Pepperoni</option>
                  <option value="hawaiian">Hawaiian</option>
                  <option value="bbq-chicken">BBQ Chicken</option>
                  <option value="veggie">Veggie Supreme</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message or special requests..."
                />
              </Form.Group>
              
              <Button 
                variant="danger" 
                type="submit" 
                className="w-100 py-2"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      
      <div className="mt-5 text-center">
        <h4>Follow us on Social Media</h4>
        <div className="mt-3">
          <Button variant="outline-primary" className="me-2">Facebook</Button>
          <Button variant="outline-info" className="me-2">Instagram</Button>
          <Button variant="outline-dark" className="me-2">Twitter</Button>
          <Button variant="outline-danger">YouTube</Button>
        </div>
      </div>
    </Container>
  );
}

export default Contact;