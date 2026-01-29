import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function Ex1Quantity() {
    const [quantity, setQuantity] = useState(0);

    return (
        <Card className="mt-4 shadow-sm">
            <Card.Body>
                <Card.Title>🛒 Exercise 1: Quantity Editor</Card.Title>

                <Row className="align-items-center mt-3">
                    <Col xs="auto">
                        <Button
                            variant="danger"
                            onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                        >
                            −
                        </Button>
                    </Col>

                    <Col xs={3}>
                        <Form.Control
                            type="number"
                            value={quantity}
                            min={0}
                            className="text-center fw-bold"
                            onChange={(e) =>
                                Number(e.target.value) >= 0 &&
                                setQuantity(Number(e.target.value))
                            }
                        />
                    </Col>

                    <Col xs="auto">
                        <Button
                            variant="success"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Ex1Quantity;
