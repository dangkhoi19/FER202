import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, ProgressBar } from 'react-bootstrap';
import { Clock, Zap, Star, Tag } from 'react-feather';

function Specials() {
  const [specials] = useState([
    {
      id: 1,
      name: "Mega Monday Deal",
      description: "Buy 1 Get 1 Free on all medium pizzas",
      discount: "50% OFF",
      timeLeft: "5:30:45",
      totalOrders: 150,
      maxOrders: 200,
      icon: "🔥",
      color: "danger"
    },
    {
      id: 2,
      name: "Family Feast Friday",
      description: "Family bundle with 3 large pizzas + drinks",
      discount: "35% OFF",
      timeLeft: "12:15:30",
      totalOrders: 89,
      maxOrders: 100,
      icon: "👨‍👩‍👧‍👦",
      color: "success"
    },
    {
      id: 3,
      name: "Weekend Special",
      description: "Extra large pizza with 4 toppings",
      discount: "25% OFF",
      timeLeft: "48:30:15",
      totalOrders: 230,
      maxOrders: 300,
      icon: "🎉",
      color: "warning"
    }
  ]);

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold gradient-text">🔥 Hot Deals & Specials</h1>
        <p className="lead text-muted">Limited time offers! Don't miss out on these amazing deals</p>
      </div>

      <Row className="g-4">
        {specials.map((deal) => (
          <Col md={4} key={deal.id}>
            <Card className="border-0 shadow-lg h-100 special-card">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <span className="display-6">{deal.icon}</span>
                    <Badge bg={deal.color} className="ms-2 fs-6">
                      {deal.discount}
                    </Badge>
                  </div>
                  <div className="text-end">
                    <div className="d-flex align-items-center text-muted">
                      <Clock size={16} className="me-1" />
                      <small>{deal.timeLeft}</small>
                    </div>
                  </div>
                </div>

                <Card.Title className="fw-bold mb-3">{deal.name}</Card.Title>
                <Card.Text className="text-muted mb-4">{deal.description}</Card.Text>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <small>Orders: {deal.totalOrders}/{deal.maxOrders}</small>
                    <small>{Math.round((deal.totalOrders / deal.maxOrders) * 100)}% claimed</small>
                  </div>
                  <ProgressBar 
                    now={(deal.totalOrders / deal.maxOrders) * 100} 
                    variant={deal.color}
                    className="rounded-pill"
                    style={{ height: "8px" }}
                  />
                </div>

                <div className="d-grid gap-2">
                  <Button variant={deal.color} size="lg" className="fw-bold">
                    <Tag size={20} className="me-2" />
                    Grab This Deal
                  </Button>
                  <Button variant="outline-secondary">
                    <Star size={18} className="me-2" />
                    Save for Later
                  </Button>
                </div>
              </Card.Body>

              <div className={`ribbon ribbon-${deal.color}`}>
                <Zap size={16} /> HOT
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5 p-4 rounded-3 flash-sale-banner">
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="text-white fw-bold">🎯 FLASH SALE!</h2>
            <p className="text-white mb-0">Extra 20% off on all orders above $30. Use code: <strong>PIZZA20</strong></p>
          </Col>
          <Col md={4} className="text-end">
            <Button variant="light" size="lg" className="fw-bold px-4">
              Shop Now →
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Specials;
