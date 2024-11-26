import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

const firstName = "John"; // Change this to your name or remove it to see the default message

function App() {
  return (
    <Container className="py-4">
      <Card className="product-card">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="greeting-section mt-4 text-center">
        <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
        {firstName && (
          <img 
            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt="Welcome"
            className="welcome-image"
          />
        )}
      </div>
    </Container>
  );
}

export default App; 