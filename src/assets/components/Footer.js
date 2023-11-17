import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col>
            <p className="text-center">All rights are reserved by @BakeryStore</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
