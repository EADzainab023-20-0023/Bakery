import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page" style={{ backgroundColor: 'white', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="fullName">
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Control type="tel" placeholder="Phone" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="description">
                    <Form.Control as="textarea" rows={6} placeholder="Description" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="success" type="submit" style={{ float: 'right' }}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;



