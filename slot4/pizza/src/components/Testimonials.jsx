import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Star, MessageCircle } from "react-feather";

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
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4 position-relative">
                <MessageCircle size={30} className="text-danger opacity-25 position-absolute top-0 end-0 m-3" />
                
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

                <Card.Text className="mb-4 fst-italic">
                  "{testimonial.comment}"
                </Card.Text>

                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-light p-3 me-3">
                    <span className="fs-4">{testimonial.image}</span>
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
    </Container>
  );
}

export default Testimonials;
