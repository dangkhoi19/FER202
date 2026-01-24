// src/components/PizzaList.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Badge, InputGroup } from 'react-bootstrap';
import PizzaCard from './PizzaCard';
import { pizzaList } from '../data/pizzaList';
import { Search, Filter, ChevronUp } from 'react-feather';

function PizzaList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Get all unique tags
  const allTags = ['all', 'Sale', 'New'];
  
  // Filter and sort pizzas
  const filteredPizzas = pizzaList
    .filter(pizza => {
      // Search filter
      const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Tag filter
      const matchesTag = selectedTag === 'all' || 
                        (pizza.tags && pizza.tags.includes(selectedTag));
      
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      // Sorting logic
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <Container className="my-5">
      {/* Header with Stats */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold gradient-text">🍕 Our Pizza Menu</h1>
        <p className="lead text-muted">
          Discover {pizzaList.length} delicious pizzas made with love
        </p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <Badge bg="success" className="px-3 py-2">
            {pizzaList.filter(p => p.tags && p.tags.includes('New')).length} New Items
          </Badge>
          <Badge bg="danger" className="px-3 py-2">
            {pizzaList.filter(p => p.tags && p.tags.includes('Sale')).length} On Sale
          </Badge>
          <Badge bg="primary" className="px-3 py-2">
            From ${Math.min(...pizzaList.map(p => p.price)).toFixed(2)}
          </Badge>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-5 p-4 bg-light rounded-3 shadow-sm">
        <Row className="align-items-center">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text>
                <Search size={20} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search pizzas by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          
          <Col md={4}>
            <div className="d-flex align-items-center">
              <Filter size={20} className="me-2 text-muted" />
              <div className="d-flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? 'danger' : 'outline-secondary'}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="text-capitalize"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
          
          <Col md={4}>
            <div className="d-flex align-items-center justify-content-end">
              {/* ĐÃ SỬA: SortAsc → ChevronUp */}
              <ChevronUp size={20} className="me-2 text-muted" />
              <Form.Select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ width: 'auto' }}
              >
                <option value="default">Sort by Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
      </div>

      {/* Pizza Count */}
      <div className="mb-4">
        <h5 className="fw-bold">
          Showing {filteredPizzas.length} of {pizzaList.length} pizzas
          {searchTerm && ` for "${searchTerm}"`}
          {selectedTag !== 'all' && ` in "${selectedTag}"`}
        </h5>
      </div>

      {/* Pizza Grid */}
      {filteredPizzas.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredPizzas.map((pizza) => (
            <Col key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center py-5">
          <div className="display-1 mb-3">🍕</div>
          <h3 className="mb-3">No pizzas found</h3>
          <p className="text-muted mb-4">Try adjusting your search or filter</p>
          <Button 
            variant="outline-danger"
            onClick={() => {
              setSearchTerm('');
              setSelectedTag('all');
            }}
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Summary */}
      {filteredPizzas.length > 0 && (
        <div className="mt-5 pt-4 text-center">
          <div className="p-4 bg-gradient rounded-3" style={{
            background: 'linear-gradient(135deg, #ffd6d6, #fff)'
          }}>
            <h4 className="fw-bold mb-3">Hungry for more?</h4>
            <p className="mb-0">
              Can't find what you're looking for? Contact us for custom orders!
            </p>
          </div>
        </div>
      )}
    </Container>
  );
}

export default PizzaList;