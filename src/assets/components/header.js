import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Img from '../images/logo.jpeg'
import '../components/header.css';

function header() {
  return (
    <Navbar bg="white" expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'><img src={Img} alt="Logo" className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto text-black  ' >
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Menu</Nav.Link>
            <Nav.Link href='#link'>About Us </Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header