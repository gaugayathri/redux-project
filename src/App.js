import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Navbar/>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
      <AddTask/>
        </Col>
    </Row>    
    </Container>
    
  );
}

export default App;
