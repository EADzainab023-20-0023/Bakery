import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Offerings = () => {
  const offeringsData = [
    {
      id: 1,
      name: 'Product 1',
      price: '$19.99',
      imageUrl: require('../images/ladoo.jpeg'), 
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$29.99',
      imageUrl: require('../images/Laddoo.jpg'),
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$30.99',
        imageUrl: require('../images/barfi.png'),
      },
      {
        id: 4,
        name: 'Product 4',
        price: '$31.99',
        imageUrl: require('../images/barfii.jpeg'),
      },
      {
        id: 5,
        name: 'Product 5',
        price: '$29.99',
        imageUrl: require('../images/barfo.jpg'),
      },
      {
        id: 6,
        name: 'Product 6',
        price: '$32.99',
        imageUrl: require('../images/barfiiii.jpeg'),
      },
  ];

  return (
    <div className="offerings-page bg-black" style={{ padding: '50px 0' }}>
      <Container>
        <Row>
          <Col md={6}>
            <h2 className='text-white'>Our Offerings</h2>
            
          </Col>
        </Row>
        <Row>
          {offeringsData.map((offering) => (
            <Col key={offering.id} md={4}>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Img variant="top" src={offering.imageUrl} alt={offering.name} />
                <Card.Body>
                  <Card.Title>{offering.name}</Card.Title>
                  <Card.Text>
                    Price: {offering.price}
                  </Card.Text>
                  <Button variant="dark">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Offerings;
