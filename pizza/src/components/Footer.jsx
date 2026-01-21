import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Footer({ myProfile }) {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h5>🍕 Pizza Delicious</h5>
            <p className="mb-0">Ngon mê ly - Giao tận nơi</p>
            <small className="text-muted">© 2024 Pizza Delicious. All rights reserved.</small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            {myProfile && (
              <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="me-3 text-end">
                  <p className="mb-0">{myProfile.name}</p>
                  <small className="text-muted">{myProfile.email}</small>
                </div>
                <Image
                  src={myProfile.avatar}
                  roundedCircle
                  width="50"
                  height="50"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;