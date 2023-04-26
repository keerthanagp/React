import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Card,Nav,Container,Button, Row,Col,CardGroup } from 'react-bootstrap';
import {FaCheck} from "react-icons/fa";
import { FiX } from "react-icons/fi";
function App() {
 return (
    <div className='App'>
      
     <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Pricing Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      <div className='mainpage'>
        <h1>Pricing Cart </h1>
      </div>

      <div className='pricingCart'>
      <CardGroup>
      <Card className='cartTitle'>
        <Card.Body className='cartbody'>
          <Card.Title><h1>Pricing Plan</h1> </Card.Title>
          <h3>1 month</h3>
          <Card.Text>
            <p><FaCheck/>Single User</p>
            <p><FaCheck/>5GB Storage</p>
            <p><FaCheck/>Unlimited Public Projects</p>
            <p><FaCheck/>Community Access</p>
            <p className="text-muted"><FiX/>Unlimited Private Projects</p>
            <p className="text-muted"><FiX/>Dedicated Phone Supportr</p>
            <p className="text-muted"><FiX/>Free Subdomain</p>
            <p className="text-muted"><FiX/>Monthly Status Reports</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='button'>
        <Button variant="primary">Add Plan</Button>{' '}
        </Card.Footer>
      </Card>
      <Card className='cartTitle'>     
        <Card.Body className='cartbody'>
          <Card.Title><h1>Pricing Plan</h1></Card.Title>
          <h3>5 month</h3>
          <Card.Text > 
            <p className='textbold'><FaCheck/>5 Users</p>
            <p><FaCheck/>50GB Storage</p>
            <p><FaCheck/>Unlimited Public Projects</p>
            <p><FaCheck/>Community Access</p>
            <p><FaCheck/>Unlimited Private Projects</p>
            <p><FaCheck/>Dedicated Phone Supportr</p>
            <p><FaCheck/>Free Subdomain</p>
            <p className="text-muted"><FiX/>Monthly Status Reports</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='button'>
        <Button variant="primary">Add Plan</Button>{' '}
        </Card.Footer>
      </Card>
      <Card className='cartTitle'>     
        <Card.Body className='cartbody'>
          <Card.Title><h1>Pricing Plan</h1></Card.Title>
          <h3>1 year plan</h3>
          <Card.Text>
            <p className='textbold'><FaCheck/>Unlimited Users</p>
            <p><FaCheck/>150GB Storage</p>
            <p><FaCheck/>Unlimited Public Projects</p>
            <p><FaCheck/>Community Access</p>
            <p><FaCheck/>Unlimited Private Projects</p>
            <p><FaCheck/>Dedicated Phone Supportr</p>
            <p><FaCheck/> <span className='textbold'> Unlimited</span>Free Subdomain</p>
            <p><FaCheck/>Monthly Status Reports</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='button'>
        <Button variant="primary">Add Plan</Button>{' '}
        </Card.Footer>
      </Card>
      </CardGroup>
  
      </div>
    
    </div>
 )}
  
export default App;
