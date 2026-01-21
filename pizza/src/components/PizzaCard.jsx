import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function PizzaCard({ pizza }) {
  return (
    <Card className="h-100 shadow-sm">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {pizza.tags && pizza.tags.length > 0 && (
          <div className="position-absolute top-0 start-0 m-2">
            {pizza.tags.map((tag, index) => (
              <Badge
                key={index}
                bg={tag === 'Sale' ? 'danger' : 'success'}
                className="me-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {pizza.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div>
            <h5 className="text-danger mb-0">${pizza.price.toFixed(2)}</h5>
            {pizza.oldPrice && (
              <small className="text-decoration-line-through text-muted">
                ${pizza.oldPrice.toFixed(2)}
              </small>
            )}
          </div>
          <Button variant="danger">Đặt hàng</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;