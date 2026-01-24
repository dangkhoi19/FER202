// src/components/PizzaModal.jsx
import React from 'react';
import { Modal, Button, Badge, Row, Col, ListGroup } from 'react-bootstrap';
import { ShoppingCart, Clock, Star, Thermometer } from 'react-feather';

function PizzaModal({ pizza, show, onHide }) {
  // Calculate discount percentage
  const discount = pizza.oldPrice 
    ? Math.round(((pizza.oldPrice - pizza.price) / pizza.oldPrice) * 100)
    : 0;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="pizza-modal">
      <Modal.Header closeButton className="bg-danger text-white">
        <Modal.Title className="fw-bold">
          {pizza.name} - Details
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        <Row>
          {/* Pizza Image */}
          <Col md={6}>
            <div className="position-relative">
              <img 
                src={pizza.image} 
                alt={pizza.name}
                className="img-fluid rounded shadow"
                style={{ height: '300px', objectFit: 'cover', width: '100%' }}
              />
              
              {/* Discount Badge */}
              {discount > 0 && (
                <div className="position-absolute top-0 end-0 m-3">
                  <Badge bg="danger" className="fs-5 px-3 py-2">
                    -{discount}%
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Quick Info */}
            <div className="mt-4 d-flex justify-content-around text-center">
              <div>
                <Clock className="text-primary mb-2" size={24} />
                <p className="mb-0 fw-bold">25-30 min</p>
                <small className="text-muted">Delivery</small>
              </div>
              <div>
                <Thermometer className="text-warning mb-2" size={24} />
                <p className="mb-0 fw-bold">Hot</p>
                <small className="text-muted">Served Fresh</small>
              </div>
              <div>
                <Star className="text-success mb-2" size={24} />
                <p className="mb-0 fw-bold">4.5/5</p>
                <small className="text-muted">Rating</small>
              </div>
            </div>
          </Col>
          
          {/* Pizza Details */}
          <Col md={6}>
            <h3 className="fw-bold mb-3">{pizza.name}</h3>
            
            {/* Tags */}
            <div className="mb-3">
              {pizza.tags && pizza.tags.map((tag, index) => (
                <Badge key={index} bg="info" className="me-2 mb-2 px-3 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Price */}
            <div className="mb-4">
              <h2 className="text-danger fw-bold">
                ${pizza.price.toFixed(2)}
              </h2>
              {pizza.oldPrice && (
                <div>
                  <span className="text-decoration-line-through text-muted me-2">
                    ${pizza.oldPrice.toFixed(2)}
                  </span>
                  <span className="text-success fw-bold">
                    Save ${(pizza.oldPrice - pizza.price).toFixed(2)}
                  </span>
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-4">
              <h5 className="fw-bold">Description</h5>
              <p className="text-muted">{pizza.description}</p>
            </div>
            
            {/* Ingredients */}
            <div className="mb-4">
              <h5 className="fw-bold">Main Ingredients</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>Fresh Mozzarella Cheese</ListGroup.Item>
                <ListGroup.Item>Homemade Tomato Sauce</ListGroup.Item>
                <ListGroup.Item>Premium Dough</ListGroup.Item>
                <ListGroup.Item>Fresh Basil & Olive Oil</ListGroup.Item>
              </ListGroup>
            </div>
            
            {/* Nutrition Info */}
            <div className="bg-light p-3 rounded">
              <h6 className="fw-bold mb-2">Nutrition (per slice)</h6>
              <Row className="text-center">
                <Col>
                  <p className="mb-0 fw-bold">285</p>
                  <small className="text-muted">Calories</small>
                </Col>
                <Col>
                  <p className="mb-0 fw-bold">12g</p>
                  <small className="text-muted">Protein</small>
                </Col>
                <Col>
                  <p className="mb-0 fw-bold">36g</p>
                  <small className="text-muted">Carbs</small>
                </Col>
                <Col>
                  <p className="mb-0 fw-bold">10g</p>
                  <small className="text-muted">Fat</small>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      
      <Modal.Footer className="justify-content-between">
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <div className="d-flex gap-2">
          <Button variant="outline-danger">
            ❤️ Add to Favorites
          </Button>
          <Button variant="danger" size="lg">
            <ShoppingCart className="me-2" />
            Add to Cart - ${pizza.price.toFixed(2)}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default PizzaModal;