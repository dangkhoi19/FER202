// src/components/PizzaCard.jsx
import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import PizzaModal from './PizzaModal';
import { ShoppingCart, Eye } from 'react-feather';

function PizzaCard({ pizza }) {
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = () => {
    setShowModal(true);
  };

  const handleBuy = () => {
    alert(`Đã thêm "${pizza.name}" vào giỏ hàng! 🛒`);
  };

  return (
    <>
      <Card className="h-100 shadow-sm border-0 pizza-card">
        {/* Pizza Image with Badges */}
        <div className="position-relative overflow-hidden">
          <Card.Img 
            variant="top" 
            src={pizza.image} 
            alt={pizza.name}
            className="pizza-image"
          />
          
          {/* Sale/New Badges */}
          {pizza.tags && pizza.tags.length > 0 && (
            <div className="position-absolute top-0 start-0 m-2">
              {pizza.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  bg={tag === 'Sale' ? 'danger' : 'success'}
                  className="me-1 px-2 py-1"
                >
                  {tag === 'Sale' ? '🔥 SALE' : '🆕 NEW'}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Quick View Overlay */}
          <div className="quick-view-overlay">
            <Button 
              variant="light" 
              size="sm"
              onClick={handleViewDetails}
              className="rounded-circle"
            >
              <Eye size={18} />
            </Button>
          </div>
        </div>

        <Card.Body className="d-flex flex-column p-3">
          {/* Pizza Name */}
          <Card.Title className="mb-2">
            <h5 className="fw-bold text-dark">{pizza.name}</h5>
          </Card.Title>

          {/* Description */}
          <Card.Text className="text-muted flex-grow-1 mb-3">
            {pizza.description.length > 60 
              ? `${pizza.description.substring(0, 60)}...` 
              : pizza.description}
          </Card.Text>

          {/* Price Section */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="text-danger fw-bold mb-0">
                ${pizza.price.toFixed(2)}
              </h4>
              {pizza.oldPrice && (
                <small className="text-decoration-line-through text-muted">
                  ${pizza.oldPrice.toFixed(2)}
                </small>
              )}
            </div>
            
            {/* Rating */}
            <div className="text-warning">
              <span className="fs-5">⭐ 4.5</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-grid gap-2">
            <Button 
              variant="outline-danger" 
              onClick={handleViewDetails}
              className="d-flex align-items-center justify-content-center"
            >
              <Eye size={18} className="me-2" />
              View Details
            </Button>
            <Button 
              variant="danger" 
              onClick={handleBuy}
              className="d-flex align-items-center justify-content-center fw-bold"
            >
              <ShoppingCart size={18} className="me-2" />
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Pizza Details Modal */}
      <PizzaModal 
        pizza={pizza}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}

export default PizzaCard;