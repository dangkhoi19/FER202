// src/components/Testimonials.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star, MessageCircle } from 'react-feather';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Food Blogger",
      comment: "The best pizza I've ever had! The crust is perfectly crispy and the toppings are fresh.",
      rating: 5,
      image: "👨‍🍳",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Regular Customer",
      comment: "Always consistent quality. Their delivery is super fast even during peak hours!",
      rating: 5,
      image: "👩‍💼",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Chef",
      comment: "As a professional chef, I can say their ingredients are top-notch. Highly recommended!",
      rating: 4,
      image: "👨‍🍳",
      date: "3 days ago"
    }
  ];

  return (
    <Container className="my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">What Our Customers Say</h2>
        <p className="lead text-muted">Real reviews from real pizza lovers</p>
      </div>

      <Row className="g-4">
        {testimonials.map((testimonial) => (
          <Col lg={4} md={6} key={testimonial.id}>
            <Card className="h-100 border-0 shadow-sm testimonial-card">
              <Card.Body className="p-4">
                {/* Quote Icon */}
                <div className="quote-icon mb-3">
                  <MessageCircle size={30} className="text-danger opacity-25" />
                </div>

                {/* Rating */}
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={20}
                      fill={i < testimonial.rating ? "#FFD700" : "#e4e5e9"}
                      className="me-1"
                    />
                  ))}
                  <span className="ms-2 text-muted">{testimonial.rating}.0</span>
                </div>

                {/* Comment */}
                <Card.Text className="mb-4 fst-italic">
                  "{testimonial.comment}"
                </Card.Text>

                {/* Customer Info */}
                <div className="d-flex align-items-center">
                  <div className="customer-avatar me-3">
                    <span className="display-6">{testimonial.image}</span>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role} • {testimonial.date}</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Stats Section */}
      <Row className="mt-5 pt-5 text-center stats-section">
        <Col md={3}>
          <div className="stat-item">
            <h3 className="display-4 fw-bold text-danger">5000+</h3>
            <p className="text-muted">Happy Customers</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="stat-item">
            <h3 className="display-4 fw-bold text-warning">98%</h3>
            <p className="text-muted">Satisfaction Rate</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="stat-item">
            <h3 className="display-4 fw-bold text-success">30min</h3>
            <p className="text-muted">Avg Delivery Time</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="stat-item">
            <h3 className="display-4 fw-bold text-primary">50+</h3>
            <p className="text-muted">Pizza Varieties</p>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        .testimonial-card {
          transition: all 0.3s ease;
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          border-radius: 20px;
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
        }
        
        .customer-avatar {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stats-section {
          position: relative;
        }
        
        .stat-item {
          padding: 30px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Container>
  );
}

export default Testimonials;