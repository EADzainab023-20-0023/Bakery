import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../images/heroimg.jpg'

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundColor: 'black', color: 'white', padding: '50px 0' }}>
      <Container>
        <Row>
          
          <Col md={6}>
           
            <p>
            Indulge in a symphony of flavors at our artisanal bakery. 
Welcome to a world where the aroma of freshly baked 
wonders captivates your senses. Our master bakers 
craft each creation with passion, using only the finest 
ingredients to ensure every bite is pure delight. 

From flaky croissants to decadent cakes, experience 
the epitome of taste and craftsmanship. Whether it's 
a special occasion or a craving for the extraordinary, 
our bakery offers a haven for your palate. Elevate 
your moments with the magic of our oven-fresh delights. 
Your journey to exceptional taste begins here.
            </p>
            
          </Col>

          
          <Col md={6}>
            <img
              src={HeroImage} 
              alt="Hero Image"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
