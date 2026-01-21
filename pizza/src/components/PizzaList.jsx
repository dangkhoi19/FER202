import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { pizzaList } from '../data/pizzaList';
import PizzaCard from './PizzaCard';

function PizzaList() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🍕 Thực Đơn Pizza</h2>
      <p className="text-center text-muted mb-5">
        Khám phá hương vị pizza tuyệt hảo với nguyên liệu tươi ngon nhất
      </p>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {pizzaList.map((pizza) => (
          <Col key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PizzaList;